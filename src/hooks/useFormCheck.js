import React from "react";

const useFormCheck = () => {
  const [validateName, setValidateName] = React.useState(null);
  const [validateDate, setValidateDate] = React.useState(null);

  const checkValues = (input) => {
    let name;
    let date;
    if (input.name === "") {
      setValidateName(false);
      name = false;
    } else if (input.name !== "") {
      setValidateName(true);
      name = true;
    }
    //year
    if (typeof input.year !== "number" || input.year < 1900) {
      setValidateDate(false);
      date = false;
    } else if (typeof input.year === "number" && input.year >= 1900) {
      setValidateDate(true);
      date = true;
    }
    //month
    if (input.month > 12 || typeof input.month !== "number") {
      setValidateDate(false);
      date = false;
    } else if (input.month <= 12 && typeof input.month === "number") {
      setValidateDate(true);
      date = true;
    }
    //day
    if (
      input.day > new Date(input.year, input.month, 0).getDate() ||
      typeof input.day !== "number"
    ) {
      setValidateDate(false);
      date = false;
    } else if (
      input.day <= new Date(input.year, input.month, 0).getDate() &&
      typeof input.day !== "number"
    ) {
      setValidateDate(true);
      date = true;
    }
    if (name && date) {
      return true;
    } else {
      return false;
    }
  };

  return [validateName, validateDate, (input) => checkValues(input)];
};

export default useFormCheck;
