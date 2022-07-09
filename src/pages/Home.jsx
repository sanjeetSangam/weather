import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ChartsMain } from "../components/Charts";
import { Days } from "../components/Days";
import { Search } from "../components/Search";
import { Coordinates } from "../logic/defaultLocation";

import loader from "../assets/loader.gif";

export const Home = () => {
  const [coordinates, setCoordinates] = useState({});
  const [dayTemp, setDayTemp] = useState({});
  const [current, setCurrent] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Coordinates(setCoordinates);
  }, []);

  return (
    <Container>
      <Search
        setLoading={setLoading}
        setCoordinates={setCoordinates}
        coordinates={coordinates}
      />

      {loading ? (
        <Box>
          <Image src={loader} />
          <Title>No City! Turn on the loaction</Title>
        </Box>
      ) : !coordinates.lat ? (
        <Box>
          <Image src={loader} />
          <Title>No City! Turn on the loaction</Title>
        </Box>
      ) : (
        <Wrapper>
          <Days
            coordinates={coordinates}
            dayTemp={dayTemp}
            setDayTemp={setDayTemp}
            setCurrent={setCurrent}
          />

          <ChartsMain dayTemp={dayTemp} current={current} />
        </Wrapper>
      )}
    </Container>
  );
};

const Container = styled.div`
  max-width: 500px;
  min-width: 500px;
  background: white;
  max-height: 95vh;
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

const Wrapper = styled.div``;

const Box = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
`;

const Title = styled.h2`
  color: black;
  text-align: center;
  padding: 0.5rem;
`;
