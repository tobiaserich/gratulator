import React from "react";
import styled from "@emotion/styled";

const Container = styled("div")`
  width: 275px;
  height: 150px;
  background-color: ${({ rotDir }) =>
    rotDir === "left" ? "#cdb4db" : "#FFAFCC"};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  transform: rotate(${({ rotDir }) => (rotDir === "left" ? "-2deg" : "2deg")});
`;

const MonthContainer = ({ dir }) => {
  console.log(dir);
  return (
    <>
      <Container rotDir={dir}></Container>
    </>
  );
};

export default MonthContainer;
