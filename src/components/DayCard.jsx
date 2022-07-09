import React, { useState } from "react";
import styled from "styled-components";

import sun from "../assets/sun.png";
import cloudy from "../assets/cloudy.png";
import rain from "../assets/rainy.png";
import { useEffect } from "react";

export const DayCard = ({ dayData }) => {
  const [dayName, setDayName] = useState("");

  useEffect(() => {
    // day logic
    let timeZ = dayData.dt;
    let day = new Date(timeZ * 1000);
    var options = { weekday: "long" };
    const din = new Intl.DateTimeFormat("en-US", options).format(day);
    setDayName(din);
  }, [dayData]);

  return (
    <Box>
      <Title>{dayName}</Title>
      <Title>
        {Math.round(dayData.temp.max - 273)}°{" "}
        {Math.round(dayData.temp.min - 273)}°
      </Title>
      <Logo
        src={
          dayData.weather[0].main === "Clear"
            ? sun
            : dayData.weather[0].main === "Clouds"
            ? cloudy
            : rain
        }
      />
      <Title>{dayData.weather[0].main}</Title>
    </Box>
  );
};

const Box = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  min-width: max-content;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background: #0d5e7e;
    border-radius: 0.5rem;
    color: #ffff;
  }
`;

const Title = styled.h4``;
const Logo = styled.img`
  height: 30px;
  width: 30px;
`;
