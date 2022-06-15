import React from "react";
import styled from "@emotion/styled";
import { DateContext } from "../context/context";

const Button = styled("div")`
  height: 30px;
  width: 30px;
  background: ${({ active }) => (active ? "#A2D2FF" : "#d9d9d9")};
  border: 1px solid #000000;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arima Madurai;
  font-size: 18px;
  font-weight: bold;
  user-select: none;
  :active {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.6);
  }
`;

const CalendarDayButton = ({ children }) => {
  const context = React.useContext(DateContext);
  return (
    <>
      <Button
        active={parseInt(children) === context.day}
        onClick={() => context.changeDate("day", parseInt(children))}
      >
        {children}
      </Button>
    </>
  );
};

export default CalendarDayButton;
