import React, { useEffect } from "react";
import styled from "styled-components";
import { Days } from "../components/Days";
import { Search } from "../components/Search";

export const Home = () => {
  useEffect(() => {}, []);

  return (
    <Container>
      <Search />
      <Days />
    </Container>
  );
};

const Container = styled.div`
  width: 500px;
  background: white;
  height: 90vh;
  border-radius: 0.5rem;
  padding: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
