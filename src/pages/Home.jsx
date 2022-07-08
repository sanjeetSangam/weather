import React from "react";
import styled from "styled-components";
import { Search } from "../components/Search";

export const Home = () => {
  return <Container>
    <Search />
  </Container>;
};

const Container = styled.div`
  width: 500px;
  background: white;
  height: 80vh;
  border-radius: 0.5rem;
  padding: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
