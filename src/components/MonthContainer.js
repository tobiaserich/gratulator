import React from "react";
import styled from "@emotion/styled";

const Container = styled("div")`
  width: 275px;
  min-height: 150px;
  margin: auto;
  margin-top: 20px;
  background-color: ${({ rotDir }) =>
    rotDir.dir === "left" ? "#cdb4db" : "#FFAFCC"};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  font-family: "Arima Madurai";
  transform: rotate(
    ${({ rotDir }) =>
      rotDir.rotation ? (rotDir.dir === "left" ? "-2deg" : "2deg") : "0deg"}
  );
`;

const MonthContainer = ({ handleRef = () => {}, dir, children }) => {
  const ref = React.useRef("");
  handleRef(ref);
  console.log(dir);
  return (
    <>
      <Container ref={ref} rotDir={dir}>
        {children}
      </Container>
    </>
  );
};

export default MonthContainer;
