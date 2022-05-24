import React from "react";
import styled from "@emotion/styled";

const InputComponent = styled("input")`
  width: ${({ forComponent }) =>
    forComponent === "name" ? "200px" : forComponent === "bDay" ? "60px" : ""};
  height: 26px;
  font-family: "Arima Madurai";
  font-size: 18px;
  background-color: blue;
  background: linear-gradient(0deg, #ffffff, #ffffff), #e9e5f0;
  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  border: none;
  text-align: center;
`;

const Input = ({ forComponent }) => {
  return <InputComponent forComponent={forComponent} />;
};
export default Input;
