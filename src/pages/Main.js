import styled from "@emotion/styled";
import React from "react";
import MonthlyBirthdayList from "../components/MonthlyBirthdayList";
import NextBirthday from "../components/NextBirthday";
import getNextBirthday from "../helper/getNextBirthday";
import sortBirthdays from "../helper/sortBirthdays";

const Header = styled("h1")`
  text-align: center;
  color: #e6e6e6;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 38px;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 70%);
`;

const birthdayList = [
  {
    name: "Tobias Erich",
    birthday: "1989/12/24",
  },
  {
    name: "Alton Ritter",
    birthday: "1990/01/20",
  },
  {
    name: "Billie Fields",
    birthday: "1985/10/22",
  },
  {
    name: "Stuart Fletcher",
    birthday: "1987/06/15",
  },
  {
    name: "Amy Sanders",
    birthday: "1963/06/15",
  },
  {
    name: "Simon Aurelius Friderichson Halfting",
    birthday: "1939/06/15",
  },
  {
    name: "Max Him",
    birthday: "1999/06/15",
  },

  {
    name: "Waverly Hutchinson",
    birthday: "2003/12/20",
  },
  {
    name: "DeForest Sutton",
    birthday: "1985/10/01",
  },
  {
    name: "Jim English",
    birthday: "1995/12/19",
  },
  {
    name: "Burley Lindsey",
    birthday: "2001/09/04",
  },
  {
    name: "Champ Pugh",
    birthday: "1991/07/22",
  },
];

const Main = () => {
  const sortedBirthdayList = sortBirthdays(birthdayList);
  const nextBirthday = getNextBirthday(sortedBirthdayList);
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
  let birthdaysPerMonth = {};
  sortedBirthdayList.forEach((singlePerson) => {
    const monthName = months[new Date(singlePerson.birthday).getMonth()];
    birthdaysPerMonth[monthName]
      ? birthdaysPerMonth[monthName].push(singlePerson)
      : (birthdaysPerMonth[monthName] = new Array(singlePerson));
  });

  const IterateTroughMonths = () => {
    const collectMonths = [];
    let counter = 0;

    for (const key in birthdaysPerMonth) {
      counter++;
      collectMonths.push(
        <MonthlyBirthdayList
          ppl={birthdaysPerMonth[key]}
          dir={counter % 2 === 0 ? "right" : "left"}
          monthName={key}
        />
      );
    }
    return collectMonths;
  };
  return (
    <>
      <Header>Gratulator</Header>
      <NextBirthday birthdayList={nextBirthday} />
      {IterateTroughMonths()}
    </>
  );
};

export default Main;
