import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { DayCard } from "./DayCard";
import { addTemp } from "../redux/action";

export const Days = ({ coordinates, setDayTemp, setCurrent }) => {
  const [weeklyData, setWeeklyData] = useState([]);
  const [selected, setSelected] = useState(0);
  const dispatch = useDispatch();
  let keyWeather = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (coordinates.lat) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lng}&appid=${keyWeather}`
        )
        .then(({ data }) => {
          setWeeklyData(data.daily);
          setCurrent(data.current);
          let dayTemp = {
            temp: data.daily[0].temp.day,
            weather: data.daily[0].weather[0].main,
          };

          setDayTemp(dayTemp);

          let arr = [
            `${data.daily[0].temp.morn}°C`,
            `${data.daily[0].temp.day}°C`,
            `${data.daily[0].temp.eve}°C`,
            `${data.daily[0].temp.night}°C`,
          ];
          dispatch(addTemp(arr));
        })
        .catch((err) => console.log(err));
    }
  }, [coordinates]);

  const showChart = (day, i) => {
    setSelected(i);

    let arr = [
      `${day.temp.morn}°C`,
      `${day.temp.day}°C`,
      `${day.temp.eve}°C`,
      `${day.temp.night}°C`,
    ];

    let dayTemp = {
      temp: day.temp.day,
      weather: day.weather[0].main,
    };

    setDayTemp(dayTemp);

    dispatch(addTemp(arr));
  };

  return (
    <Wrapper>
      {weeklyData.length > 0 &&
        weeklyData.map((day, i) => (
          <div
            data-aos="fade-up"
            key={i}
            style={{
              border:
                selected === i ? "2px solid #00a6fa" : "2px solid #e9e9e9",
              borderRadius: "0.5rem",
              background: selected === i ? "#0d5e7e" : "#fff",
              color: selected === i ? "#ffff" : "#324355",
            }}
            onClick={() => {
              showChart(day, i);
            }}
          >
            <DayCard dayData={day} />
          </div>
        ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 0.5rem;
  padding: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  gap: 0.7rem;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #1068a3;
    border-radius: 0.2rem;
    cursor: pointer;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #010c31;
  }
`;
