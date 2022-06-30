import React from "react";
import Calendar from "./Calendar";
import Input from "./Input";
import CalendarButton from "./CalendarButton";
import Button from "./Button";
import { get, set, update, values } from "idb-keyval";
import DarkenBackground from "./DarkenBackground";
import { H1, H3 } from "./FormHeadings";
import FormContainer from "./FormContainer";
import FormLabel from "./FormLabel";
import { InputWrapper, BirthdayWrapper } from "./FormWrapper";
import ButtonBar from "./ButtonBar";
import FormError from "./FormError";
import useFormCheck from "../hooks/useFormCheck";
import { DateContext } from "../context/context";

const ChangePersonForm = ({ closeForm, updateBirthdayList, personData }) => {
  const [calendarVisible, setCalendarVisible] = React.useState(false);
  const [checkedName, checkedDate, setCheckValues] = useFormCheck();
  const ref = React.useRef(null);
  const context = React.useContext(DateContext);
  React.useEffect(() => {
    const date = new Date(personData.birthday);
    context.changeDate("name", personData.name);
    context.changeDate("day", date.getDate());
    context.changeDate("month", date.getMonth() + 1);
    context.changeDate("year", date.getFullYear());
  }, []);
  const checkClick = (event) => {
    if (ref.current === event.target.offsetParent && calendarVisible) {
      setCalendarVisible(false);
    }
  };

  const handleSubmit = async (context) => {
    const validated = setCheckValues(context);
    if (validated) {
      update("gratulator", (val) => {
        const oldEntries = [...val];
        oldEntries[personData.indexNo].name = context.name;
        oldEntries[
          personData.indexNo
        ].birthday = `${context.year}/${context.month}/${context.day}`;
        return oldEntries;
      });

      closeForm();
    }
    updateBirthdayList();
  };

  const handleDelete = async (context) => {
    const validated = setCheckValues(context);
    if (validated) {
      update("gratulator", (val) => {
        const oldEntries = [...val];
        oldEntries[personData.indexNo] = false;
        const filteredEntries = oldEntries.filter((entry) => entry);
        if (filteredEntries.length === 0) {
          return;
        } else {
          return filteredEntries;
        }
      });

      closeForm();
    }
    updateBirthdayList();
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
            <Button size="small" handleClick={handleDelete}>
              delete
            </Button>
            <Button size="small" handleClick={handleSubmit}>
              Submit
            </Button>
          </ButtonBar>
        </form>
      </FormContainer>
      <DarkenBackground onClick={closeForm}></DarkenBackground>
    </>
  );
};

export default ChangePersonForm;
