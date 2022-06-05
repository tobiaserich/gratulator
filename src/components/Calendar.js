import React from "react";
import styled from "@emotion/styled";
import Dropdown from "./Dropdown";
import CalendarDayButton from "./CalendarDayButton";

const Container = styled("div")`
  height: 220px;
  width: 280px;
  background-color: #4d445f;
  border-radius: 20px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  position: relative;
  padding-top: 50px;
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
  height: 100%;
  width: calc(100% - 10px);
  background-color: #605577;
  border-radius: 0 0 20px 20px;
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;
const DayName = styled("div")`
  width: 32px;
  text-align: center;
`;
const Calendar = () => {
  const [chosenDate, setChosenDate] = React.useState(new Date());
  const [currentDay, setCurrentDay] = React.useState(new Date().getDate());
  const [currentMonth, setCurrentMonth] = React.useState("January");
  const [currentYear, setCurrentYear] = React.useState("2000");

  const firstDayOfMonth = () => {
    const value = new Date(`${currentMonth} 1, ${currentYear}`).getDay();
    const spacer = value === 0 ? 6 : value - 1;
    return spacer;
  };

  const setDateElement = (value) => {
    if (value.name === "month") {
      setCurrentMonth(value.value);
    } else if (value.name === "year") {
      setCurrentYear(value.value);
    } else if (value.name === "day") {
      const date = new Date(`${currentMonth} ${value.value}, ${currentYear}`);
      setChosenDate(date);
      setCurrentDay(value.value);
    }
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthLength = new Date(
    currentYear,
    months.indexOf(currentMonth) + 1,
    0
  ).getDate();

  const makeItVisible = () => {
    const result =
      months.indexOf(currentMonth) === chosenDate.getMonth() &&
      chosenDate.getFullYear() === currentYear;
    return result;
  };

  const years = [
    2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011,
    2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
  ];
  return (
    <Container>
      <Head>
        <Dropdown
          menuFor="month"
          dropdownItems={months}
          changeDate={setDateElement}
        />
        <Dropdown
          menuFor="year"
          dropdownItems={years}
          changeDate={setDateElement}
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
        {new Array(firstDayOfMonth()).fill("").map(() => (
          <div></div>
        ))}
        {new Array(monthLength).fill("").map((child, index) => {
          return (
            <CalendarDayButton
              changeDay={setDateElement}
              currentDay={currentDay === index + 1 && makeItVisible()}
            >
              {index + 1}
            </CalendarDayButton>
          );
        })}
      </Body>
    </Container>
  );
};

export default Calendar;
