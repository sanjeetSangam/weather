import React, { Component, useEffect } from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import styled from "styled-components";

import sun from "../assets/sun.png";
import cloudy from "../assets/cloudy.png";
import rain from "../assets/rainy.png";
import { SunInfo } from "./SunInfo";

export const ChartsMain = ({ dayTemp, current }) => {
  const temp = useSelector((store) => store.temp);
  useEffect(() => {}, [temp]);

  const RenderChart = () => {
    return (
      <>
        <Charts temp={temp} />
      </>
    );
  };
  return (
    temp && (
      <Wrapper>
        <Box>
          <Title>{Math.round(dayTemp.temp - 273)}°C</Title>

          <Logo
            src={
              dayTemp.weather === "Clear"
                ? sun
                : dayTemp.weather === "Clouds"
                ? cloudy
                : rain
            }
          />
        </Box>
        <RenderChart />

        <SunInfo current={current} />
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  border-radius: 0.5rem;
  padding: 0.5rem 0.8rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0.5rem;
`;

const Title = styled.h1`
  color: red;
`;

const Logo = styled.img`
  height: 30px;
  width: 30px;
`;

class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: "area",
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          categories: ["Morning", "Day", "Evening", "Night"],
        },
        dataLabels: {
          enabled: false,
        },
      },
      series: [
        {
          name: "Temp(°F)",
          data: props.temp,
        },
      ],
    };
  }

  render() {
    return (
      <div style={{ width: "100%" }}>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
          width="100%"
          height="300px"
        />
      </div>
    );
  }
}
