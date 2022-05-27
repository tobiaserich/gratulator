import React from "react";
import styled from "@emotion/styled";

const ButtonComp = styled("div")`
  width: ${({ size }) =>
    size === "big" ? "150px" : size === "small" ? "100px" : ""};
  height: 40px;
  display: flex;
  justify-content: center;
  font-family: "Arima Madurai";
  font-size: 18px;
  align-items: center;
  background: #a2d2ff;
  border-radius: 23px;
  margin-bottom: 5px;
  user-select: none;

  :hover {
    box-shadow: 0px 2px 10px #cdb4db;
  }
  :active {
    box-shadow: 0px 0px 5px #cdb4db;
  }
`;

const Button = ({ size, children }) => (
  <ButtonComp size={size}>{children}</ButtonComp>
);
export default Button;
