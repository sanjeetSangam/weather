import React from "react";
import styled from "styled-components";
import { DayCard } from "./DayCard";

export const Days = () => {
  return (
    <Wrapper>
      <DayCard />
      <DayCard />
      <DayCard />
      <DayCard />
      <DayCard />
      <DayCard />
      <DayCard />
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
    background: #074168;
    border-radius: 0.2rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #010c31;
  }
`;
