import React from "react";
import styled from "@emotion/styled";
import Dropdown from "./Dropdown";
import CalendarDayButton from "./CalendarDayButton";
import { DateContext } from "../context/context";

const Container = styled("div")`
  width: 280px;
  background-color: #4d445f;
  border-radius: 20px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  position: absolute;
  right: 0;
  padding-top: 50px;
  z-index: 1100;
  border-radius: 40px 20px 40px 20px;
  animation: fadeIn 0.4s both;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
const Head = styled("div")`
  border-radius: 20px 20px 0 0;
  position: absolute;
  display: flex;
  justify-content: center;
  top: 5px;
  left: 0;
  right: 0;
  padding: 5px 0;
`;

const Body = styled("div")`
  color: black;
  height: 100%;
  background-color: #605577;
  border-radius: 0 0 40px 20px;
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  row-gap: 5px;
`;

const DayName = styled("div")`
  width: 32px;
  text-align: center;
`;
const Calendar = () => {
  const [closeDropdown, setCloseDropdown] = React.useState(false);
  const context = React.useContext(DateContext);
  const ref = React.useRef(null);

  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const years = new Array(120)
    .fill()
    .map((v, index) => new Date().getFullYear() - index);

  //check which weekday is the first day of the month and return the required amount of spacer
  const firstDayOfMonth = () => {
    const value = new Date(
      `${months[context.month - 1]} 1, ${context.year}`
    ).getDay();
    const spacer = value === 0 ? 6 : value - 1;
    return spacer;
  };
  //check the month length to handle 30/31 day months and also february in leap/non-leap years
  const monthLength = new Date(context.year, context.month, 0).getDate();

  //close dropdown on offside click
  const checkClick = (event) => {
    if (ref?.current === event.target.offsetParent) {
      setCloseDropdown(true);
    }
  };
  return (
    <Container ref={ref} onClick={checkClick}>
      <Head>
        <Dropdown
          menuFor="month"
          dropdownItems={months}
          dropdownActive={{ closeDropdown, setCloseDropdown }}
        />
        <Dropdown
          menuFor="year"
          dropdownItems={years}
          dropdownActive={{ closeDropdown, setCloseDropdown }}
        />
      </Head>
      <Body>
        <DayName>Mo</DayName>
        <DayName>Tu</DayName>
        <DayName>We</DayName>
        <DayName>Th</DayName>
        <DayName>Fr</DayName>
        <DayName>Sa</DayName>
        <DayName>Su</DayName>
        {!isNaN(firstDayOfMonth())
          ? new Array(firstDayOfMonth()).fill("").map(() => <div></div>)
          : ""}
        {new Array(monthLength)?.fill("").map((child, index) => {
          return <CalendarDayButton>{index + 1}</CalendarDayButton>;
        })}
      </Body>
    </Container>
  );
};

export default Calendar;
