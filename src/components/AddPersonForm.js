import React from "react";
import Calendar from "./Calendar";
import Input from "./Input";
import CalendarButton from "./CalendarButton";
import Button from "./Button";
import { DateContext } from "../context/context";
import { get, set, update } from "idb-keyval";
import DarkenBackground from "./DarkenBackground";
import { H1, H3 } from "./FormHeadings";
import FormContainer from "./FormContainer";
import FormLabel from "./FormLabel";
import { InputWrapper, BirthdayWrapper } from "./FormWrapper";
import ButtonBar from "./ButtonBar";
import FormError from "./FormError";
import useFormCheck from "../hooks/useFormCheck";

const AddPersonForm = ({ closeForm, updateBirthdayList }) => {
  const [calendarVisible, setCalendarVisible] = React.useState(false);
  const [checkedName, checkedDate, setCheckValues] = useFormCheck();
  const ref = React.useRef(null);
  const context = React.useContext(DateContext);
  // check offside click to close calendar
  const checkClick = (event) => {
    if (ref.current === event.target.offsetParent && calendarVisible) {
      setCalendarVisible(false);
    }
  };

  // submit and validate form data
  const handleSubmit = async () => {
    console.log(context);
    const result = await get("gratulator");
    const validated = setCheckValues(context);
    if (validated) {
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
  };

  //close top component on background click
  const handleOffsideClick = () => {
    if (calendarVisible) {
      setCalendarVisible(false);
    } else {
      closeForm();
    }
  };
  return (
    <>
      <FormContainer onClick={checkClick} ref={ref}>
        <H1>Add new Person</H1>
        <form>
          <InputWrapper>
            <FormLabel title="full name">
              <H3>Name</H3>

              <Input forComponent="name" part="name"></Input>
              {!checkedName && checkedName !== null ? (
                <FormError>wrong name format</FormError>
              ) : (
                ""
              )}
            </FormLabel>
          </InputWrapper>
          <H3 title="dd/mm/yyyy">Birthday</H3>
          <BirthdayWrapper>
            <FormLabel title="dd">
              <Input forComponent="bDay" part="day" />
              Day
            </FormLabel>
            <FormLabel title="mm">
              <Input forComponent="bDay" part="month" />
              Month
            </FormLabel>
            <FormLabel title="yyyy">
              <Input forComponent="bDayLong" part="year" />
              Year
            </FormLabel>
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
          </BirthdayWrapper>
          {!checkedDate && checkedDate !== null ? (
            <FormError>please insert valid date</FormError>
          ) : (
            ""
          )}
          <ButtonBar
            errorMessageActive={{ name: checkedName, date: checkedDate }}
          >
            <Button size="small" handleClick={closeForm}>
              cancel
            </Button>
            <Button size="small" handleClick={handleSubmit}>
              Submit
            </Button>
          </ButtonBar>
        </form>
      </FormContainer>
      <DarkenBackground onClick={handleOffsideClick}></DarkenBackground>
    </>
  );
};

export default AddPersonForm;
