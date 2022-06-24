import React from "react";
import styled from "@emotion/styled";
import { DateContext } from "../context/context";

const InputComponent = styled("input")`
  width: ${({ forComponent }) =>
    forComponent === "name"
      ? "200px"
      : forComponent === "bDay" || forComponent === "bDayLong"
      ? "60px"
      : ""};
  height: 26px;
  font-family: "Arima Madurai";
  font-size: 18px;
  background-color: blue;
  background: linear-gradient(0deg, #ffffff, #ffffff), #e9e5f0;
  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  border: none;
  padding: 0 10px;
  text-align: ${({ forComponent }) =>
    forComponent === "bDay" ? "center" : ""};
  margin: 5px;
`;

const Input = ({ forComponent, part }) => {
  const context = React.useContext(DateContext);

  const handleKey = (e) => {
    switch (e.key) {
      case "Enter":
        e.target.nextSibling?.focus();
        break;
      default:
        break;
    }
  };

  return (
    <InputComponent
      onChange={(e) => context.changeDate(part, e.target.value)}
      onKeyUp={handleKey}
      forComponent={forComponent}
      value={context[part]}
      maxLength={
        forComponent === "bDay" ? "2" : forComponent === "bDayLong" ? "4" : ""
      }
    />
  );
};
export default Input;
