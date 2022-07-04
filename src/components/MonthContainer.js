import React from "react";
import styled from "@emotion/styled";

const Container = styled("div")`
  width: 275px;
  min-height: 150px;
  margin: auto;
  margin-top: 20px;
  background-color: ${({ bgColor }) => (bgColor === 0 ? "#cdb4db" : "#FFAFCC")};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  font-family: "Arima Madurai";
`;

const MonthContainer = ({ bgColor, children }) => {
  return (
    <>
      <Container bgColor={bgColor}>{children}</Container>
    </>
  );
};

export default MonthContainer;
