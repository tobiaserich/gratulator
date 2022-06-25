import React from "react";
import styled from "@emotion/styled";
import { DateContext } from "../context/context";
import { get, set, update } from "idb-keyval";

const ButtonComp = styled("div")`
  width: ${({ size }) =>
    size === "big" ? "150px" : size === "small" ? "100px" : ""};
  height: 35px;
  display: flex;
  justify-content: center;
  font-family: "Arima Madurai";
  font-size: 18px;
  align-items: center;
  background: #a2d2ff;
  border-radius: 23px;
  margin-bottom: 5px;
  user-select: none;
  margin: auto;
  margin-bottom: 5px;
  position: relative;
  z-index: 1000;
  pointer-events: auto;
  color: black;
  :hover {
    box-shadow: 0px 2px 10px #cdb4db;
  }
  :active {
    box-shadow: 0px 0px 5px #cdb4db;
  }
`;

const Button = ({ size, children, clickType = null, handleClick }) => {
  const context = React.useContext(DateContext);

  return (
    <ButtonComp onClick={() => handleClick(context)} size={size}>
      {children}
    </ButtonComp>
  );
};
export default Button;
