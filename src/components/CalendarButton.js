import styled from "@emotion/styled";
import calendarSymbol from "../assets/calendarSymbol.svg";

const CalendarButton = styled("button")`
  width: 25px;
  height: 25px;
  background: #a2d2ff;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  border: none;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("${calendarSymbol}");
  margin-top: 5px;
  :hover {
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
  }
  :active {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.6);
  }
`;

export default CalendarButton;
