import React from "react";
import styled from "@emotion/styled";
import Calendar from "./Calendar";
import Input from "./Input";
import CalendarButton from "./CalendarButton";
import Button from "./Button";
import { DateProvider } from "../context/context";
import { get, set, update } from "idb-keyval";


const Background = styled("div")`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 999;
`;

const H1 = styled("h1")`
  padding: 0;
  margin: 5px 0 0 0;
  font-weight: normal;
`;

const Container = styled("div")`
  text-align: center;
  color: white;
  padding: 0;
  position: absolute;
  height: 350px;
  width: 90%;
  background-color: #413a50;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  z-index: 1000;
  font-size: 20px;
  font-weight: bold;
`;

const InputContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BirthdayContainer = styled(InputContainer)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: normal;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: -15px;
`;

const Label = styled("label")`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

const H3 = styled("h3")`
  margin: 0;
  font-size: 22px;
`;

const ButtonBar = styled("div")`
  display: flex;
  margin-top: ${({ errorMessageActive }) => {
    let sum = 40;
    if (errorMessageActive.name === true) {
      sum = sum - 8;
    }
    if (errorMessageActive.date === true) {
      sum = sum - 32;
    }
    return `${sum}px;`;
  }};
`;
const ErrorMessage = styled("span")`
  color: red;
  font-size: 12px;
  margin-top: -6px;
  margin-bottom: -5px;
`;
const AddPersonForm = ({ closeForm, updateBirthdayList }) => {
  const [calendarVisible, setCalendarVisible] = React.useState(false);
  const [errorForm, setErrorForm] = React.useState({
    name: false,
    date: false,
    day: false,
    month: false,
    year: false,
  });
  const ref = React.useRef(null);

  const checkClick = (event) => {
    if (ref.current === event.target.offsetParent && calendarVisible) {
      setCalendarVisible(false);
    }
  };

  const validateSubmit = (context) => {
    //name
    const newErrorForm = { ...errorForm };
    if (context.name === "") {
      newErrorForm.name = true;
      setErrorForm(newErrorForm);
    } else if (context.name !== "") {
      newErrorForm.name = false;
      setErrorForm(newErrorForm);
    }
    //year
    if (typeof context.year !== "number" || context.year < 1900) {
      newErrorForm.date = true;
      setErrorForm(newErrorForm);
    } else if (typeof context.year === "number" && context.year >= 1900) {
      newErrorForm.date = false;
      setErrorForm(newErrorForm);
    }
    //month
    if (context.month > 12 || typeof context.month !== "number") {
      newErrorForm.date = true;
      setErrorForm(newErrorForm);
    } else if (context.month <= 12 && typeof context.month === "number") {
      newErrorForm.date = false;
      setErrorForm(newErrorForm);
    }
    //day
    if (
      context.day > new Date(context.year, context.month, 0).getDate() ||
      typeof context.day !== "number"
    ) {
      newErrorForm.date = true;
      setErrorForm(newErrorForm);
    } else if (
      context.day <= new Date(context.year, context.month, 0).getDate() &&
      typeof context.day !== "number"
    ) {
      newErrorForm.date = false;
      setErrorForm(newErrorForm);
    }
    return newErrorForm.date === true || newErrorForm.name === true
      ? false
      : true;
  };
  const handleSubmit = async (context) => {
    const result = await get("gratulator");
    const submitValidated = validateSubmit(context);
    if (submitValidated) {
      if (result) {
        update("gratulator", (val) => {
          val.push({
            name: context.name,
            birthday: `${context.year}/${context.month}/${context.day}`,
          });

          return val;
        });
      } else {
        await set("gratulator", [
          {
            name: context.name,
            birthday: `${context.year}/${context.month}/${context.day}`,
          },
        ]);
      }
      closeForm();
    }
    updateBirthdayList();
    // context.changeDate("default");
  };
  return (
    <DateProvider>
      <Container onClick={checkClick} ref={ref}>
        <H1>Add new Person</H1>
        <form>
          <InputContainer>
            <Label title="full name">
              <H3>Name</H3>

              <Input forComponent="name" part="name"></Input>
              {errorForm.name ? (
                <ErrorMessage>wrong name format</ErrorMessage>
              ) : (
                ""
              )}
            </Label>
          </InputContainer>
          <H3 title="dd/mm/yyyy">Birthday</H3>
          <BirthdayContainer>
            <Label title="dd">
              <Input forComponent="bDay" part="day" />
              Day
            </Label>
            <Label title="mm">
              <Input forComponent="bDay" part="month" />
              Month
            </Label>
            <Label title="yyyy">
              <Input forComponent="bDayLong" part="year" />
              Year
            </Label>
            <div>
              <CalendarButton
                type="button"
                onClick={() => setCalendarVisible(!calendarVisible)}
              />
              {calendarVisible ? (
                <Calendar closeCalendar={() => setCalendarVisible(false)} />
              ) : (
                ""
              )}
            </div>
          </BirthdayContainer>
          {errorForm.date ? (
            <ErrorMessage>please insert valid date</ErrorMessage>
          ) : (
            ""
          )}
          <ButtonBar errorMessageActive={errorForm}>
            <Button size="small" handleClick={closeForm}>
              cancel
            </Button>
            <Button size="small" handleClick={handleSubmit}>
              Submit
            </Button>
          </ButtonBar>
        </form>
      </Container>
      <Background onClick={closeForm}></Background>
    </DateProvider>
  );
};

export default AddPersonForm;
