import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

export const SunInfo = ({ current }) => {
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");

  useEffect(() => {
    let sunrise = current.sunrise;
    let sunRtime = new Date(sunrise * 1000);
    setSunrise(sunRtime.toLocaleTimeString());

    let sunset = current.sunset;
    let sunStime = new Date(sunset * 1000);
    setSunset(sunStime.toLocaleTimeString());
  }, [current]);

  return (
    <Container>
      <Wrapper>
        <Box>
          <Text state="title">Pressure</Text>
          <Text>{current.pressure} hlpa</Text>
        </Box>
        <Box>
          <Text state="title">Humidity</Text>
          <Text>{current.humidity} %</Text>
        </Box>
      </Wrapper>
      <Wrapper>
        <Box>
          <Text state="title">Sunrise</Text>
          <Text>{sunrise} </Text>
        </Box>
        <Box>
          <Text state="title">Sunset</Text>
          <Text>{sunset} </Text>
        </Box>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div``;

const Wrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
`;

const Box = styled.div`
  background: #f3fbff;
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

const Text = styled.p`
  font-weight: ${({ state }) => (state === "title" ? "600" : "200")};
  font-size: 14px;
  color: #596977;
  line-height: 21px;
`;
