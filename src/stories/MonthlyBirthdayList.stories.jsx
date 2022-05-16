import React from "react";
import MonthlyBdayList from "../components/MonthlyBirthdayList";

export default {
  title: "components",
  component: MonthlyBdayList,
  argTypes: {
    counter: { control: { type: "number", min: 0, max: 50 } },
    dir: { control: { type: "radio", options: ["left", "right"] } },
  },
};
export const MonthlyBirthdayList = (args) => {
  const counter = args.counter;
  const personList = [
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    {
      name: "Sebastian Jonathan Aurelius Fuchs",
      birthday: "24.12.1989",
      age: "32",
    },
    { name: "Kim Erd", birthday: "24.12.1989", age: "32" },
    {
      name: "Sebastian Jonathan Aurelius Fuchs",
      birthday: "24.12.1989",
      age: "32",
    },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    {
      name: "Sebastian Jonathan Aurelius Fuchs",
      birthday: "24.12.1989",
      age: "32",
    },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    {
      name: "Sebastian Jonathan Aurelius Fuchs",
      birthday: "24.12.1989",
      age: "32",
    },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    {
      name: "Sebastian Jonathan Aurelius Fuchs",
      birthday: "24.12.1989",
      age: "32",
    },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    {
      name: "Sebastian Jonathan Aurelius Fuchs",
      birthday: "24.12.1989",
      age: "32",
    },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    {
      name: "Sebastian Jonathan Aurelius Fuchs",
      birthday: "24.12.1989",
      age: "32",
    },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    {
      name: "Sebastian Jonathan Aurelius Fuchs",
      birthday: "24.12.1989",
      age: "32",
    },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    {
      name: "Sebastian Jonathan Aurelius Fuchs",
      birthday: "24.12.1989",
      age: "32",
    },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    {
      name: "Sebastian Jonathan Aurelius Fuchs",
      birthday: "24.12.1989",
      age: "32",
    },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    {
      name: "Sebastian Jonathan Aurelius Fuchs",
      birthday: "24.12.1989",
      age: "32",
    },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    {
      name: "Sebastian Jonathan Aurelius Fuchs",
      birthday: "24.12.1989",
      age: "32",
    },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    {
      name: "Sebastian Jonathan Aurelius Fuchs",
      birthday: "24.12.1989",
      age: "32",
    },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    {
      name: "Sebastian Jonathan Aurelius Fuchs",
      birthday: "24.12.1989",
      age: "32",
    },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    {
      name: "Sebastian Jonathan Aurelius Fuchs",
      birthday: "24.12.1989",
      age: "32",
    },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    {
      name: "Sebastian Jonathan Aurelius Fuchs",
      birthday: "24.12.1989",
      age: "32",
    },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    {
      name: "Sebastian Jonathan Aurelius Fuchs",
      birthday: "24.12.1989",
      age: "32",
    },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    {
      name: "Sebastian Jonathan Aurelius Fuchs",
      birthday: "24.12.1989",
      age: "32",
    },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    {
      name: "Sebastian Jonathan Aurelius Fuchs",
      birthday: "24.12.1989",
      age: "32",
    },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    {
      name: "Sebastian Jonathan Aurelius Fuchs",
      birthday: "24.12.1989",
      age: "32",
    },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    {
      name: "Sebastian Jonathan Aurelius Fuchs",
      birthday: "24.12.1989",
      age: "32",
    },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    {
      name: "Sebastian Jonathan Aurelius Fuchs",
      birthday: "24.12.1989",
      age: "32",
    },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    {
      name: "Sebastian Jonathan Aurelius Fuchs",
      birthday: "24.12.1989",
      age: "32",
    },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    {
      name: "Sebastian Jonathan Aurelius Fuchs",
      birthday: "24.12.1989",
      age: "32",
    },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    {
      name: "Sebastian Jonathan Aurelius Fuchs",
      birthday: "24.12.1989",
      age: "32",
    },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    {
      name: "Sebastian Jonathan Aurelius Fuchs",
      birthday: "24.12.1989",
      age: "32",
    },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    {
      name: "Sebastian Jonathan Aurelius Fuchs",
      birthday: "24.12.1989",
      age: "32",
    },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    {
      name: "Sebastian Jonathan Aurelius Fuchs",
      birthday: "24.12.1989",
      age: "32",
    },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    {
      name: "Sebastian Jonathan Aurelius Fuchs",
      birthday: "24.12.1989",
      age: "32",
    },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    {
      name: "Sebastian Jonathan Aurelius Fuchs",
      birthday: "24.12.1989",
      age: "32",
    },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    {
      name: "Sebastian Jonathan Aurelius Fuchs",
      birthday: "24.12.1989",
      age: "32",
    },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
    {
      name: "Sebastian Jonathan Aurelius Fuchs",
      birthday: "24.12.1989",
      age: "32",
    },
    { name: "Tobias Erich", birthday: "24.12.1989", age: "32" },
  ];
  return (
    <MonthlyBdayList
      ppl={personList}
      counter={counter}
      dir={args.dir}
    ></MonthlyBdayList>
  );
};
