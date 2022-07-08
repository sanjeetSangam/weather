import React from "react";
import styled from "styled-components";

import { ImLocation, ImSearch } from "react-icons/im";

export const Search = () => {
  return (
    <Form>
      <Item>
        <ImLocation />
      </Item>
      <Input placeholder="Search" />

      <Item>
        <ImSearch />
      </Item>
    </Form>
  );
};

const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  padding: 0.2rem 1rem;
  border: 2px solid transparent;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  :focus-within {
    border: 2px solid black;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: none;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
`;

const Item = styled.div``;
