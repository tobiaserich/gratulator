import React from "react";

const DateContext = React.createContext({});

const DateProvider = (props) => {
  const [inputDay, setInputDay] = React.useState(new Date().getDate());
  const [inputMonth, setInputMonth] = React.useState(new Date().getMonth() + 1);
  const [inputYear, setInputYear] = React.useState(new Date().getFullYear());
  const changeDate = (part, value) => {
    switch (part) {
      case "day":
        if (value > 0) {
          setInputDay(parseInt(value));
        } else {
          setInputDay("");
        }

        break;
      case "month":
        if (value > 0) {
          setInputMonth(parseInt(value));
        } else {
          setInputMonth("");
        }

        break;
      case "year":
        if (value > 0) {
          setInputYear(parseInt(value));
        } else {
          setInputYear("");
        }
        break;
      default:
        break;
    }
  };
  const values = {
    day: inputDay,
    month: inputMonth,
    year: inputYear,
    changeDate: changeDate,
  };

  return (
    <DateContext.Provider value={values}>{props.children}</DateContext.Provider>
  );
};

export { DateContext, DateProvider };
