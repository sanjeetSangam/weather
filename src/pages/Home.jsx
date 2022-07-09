import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ChartsMain } from "../components/Charts";
import { Days } from "../components/Days";
import { Search } from "../components/Search";
import { Coordinates } from "../logic/defaultLocation";

export const Home = () => {
  const [coordinates, setCoordinates] = useState({});
  const [city, setCity] = useState("");
  const [dayTemp, setDayTemp] = useState({});
  const [data, setData] = useState({});
  let keyWeather = "4f9b36e869c7131975a9c2395cf59c46";

  useEffect(() => {
    Coordinates(setCoordinates);
  }, []);

  useEffect(() => {
    if (coordinates.lat !== null) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lng}&appid=${keyWeather}`
        )
        .then(({ data }) => {
          setCity(data.name);
        })
        .catch((err) => console.log(err));
    }
  }, [coordinates]);

  return (
    <Container>
      <Search city={city} setCity={setCity} />
      <Days
        coordinates={coordinates}
        dayTemp={dayTemp}
        setDayTemp={setDayTemp}
      />
      <ChartsMain dayTemp={dayTemp} />
    </Container>
  );
};

const Container = styled.div`
  max-width: 500px;
  background: white;
  height: 95vh;
  border-radius: 0.5rem;
  padding: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;
