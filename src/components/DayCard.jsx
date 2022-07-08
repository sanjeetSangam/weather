import React from "react";
import styled from "styled-components";

import sun from "../assets/sun.png";
import cloudy from "../assets/cloudy.png";
import rain from "../assets/rainy.png";

export const DayCard = () => {
  return (
    <Box>
      <Title>Fri</Title>
      <Title>41 °33°</Title>
      <Logo src={sun} />
      <Title>41 °33°</Title>
    </Box>
  );
};

const Box = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  color: #324355;
  min-width: max-content;
  cursor: pointer;
  border: 2px solid #e9e9e9;

  :focus-within {
    border: 2px solid #00a6fa;
  }
`;

const Title = styled.h4``;
const Logo = styled.img`
  height: 30px;
  width: 30px;
`;
