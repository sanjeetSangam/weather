import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

import suns from "../assets/suns.jpg";

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
      <Wrapper type="grid">
        <Box>
          <Text state="title">Pressure</Text>
          <Text>{current.pressure} hlpa</Text>
        </Box>
        <Box>
          <Text state="title">Humidity</Text>
          <Text>{current.humidity} %</Text>
        </Box>
      </Wrapper>
      <Wrapper type="rise">
        <Box type="sun">
          <Text state="title">Sunrise</Text>
          <Text>{sunrise} </Text>
        </Box>
        <Box type="sun">
          <Text state="title">Sunset</Text>
          <Text>{sunset} </Text>
        </Box>
      </Wrapper>

      <Wrapper>
        <Image src={suns} />
        <Wrapper type="rise">
          <Box type="sun">
            <Text>5am</Text>
          </Box>
          <Box type="sun">
            <Text>2pm</Text>
          </Box>
          <Box type="sun">
            <Text>6pm</Text>
          </Box>
        </Wrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div``;

const Wrapper = styled.div`
  display: ${({ type }) =>
    type === "rise" ? "flex" : type === "grid" ? "grid" : "block"};
  justify-content: space-between;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
`;

const Box = styled.div`
  background: ${({ type }) => (type === "sun" ? "#ffff" : "#f3fbff")};
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

const Text = styled.p`
  font-weight: ${({ state }) => (state === "title" ? "600" : "200")};
  font-size: 14px;
  color: #596977;
  line-height: 21px;
`;

const Image = styled.img`
  grid-column: 1/3;
  width: 100%;
`;
