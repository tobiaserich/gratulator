import React from "react";
import styled from "@emotion/styled";
import MonthContainer from "./MonthContainer";
import SeparationLine from "./SeparationLine";
import calcAge from "../helper/calcAge";

const Person = styled("span")`
  max-width: 255px;
  width: 100%;
  display: flex;
  padding: 0 10px;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PersonalInformation = styled("div")`
  width: calc(230px / 3);
  margin: auto;
  text-align: center;
`;

const H2 = styled("h2")`
  display: inline-block;
  margin: 0 0 10px 7px;
  border-bottom: 2px solid #bde0fe;
`;

const MonthlyBirthdayList = ({
  ppl,
  counter = "all",
  bgColor,
  month,
  openChangePersonForm,
}) => {
  const handleClick = (indexNo) => {
    openChangePersonForm({ month, indexNo });
  };
  return (
    <>
      <MonthContainer bgColor={bgColor}>
        <H2>{month}</H2>
        {ppl.map((person, index) => {
          return index <=
            (typeof counter === "string" ? ppl.length - 1 : counter) ? (
            <React.Fragment key={person.name + person.birthday + index}>
              <Person
                key={person.name + "Container"}
                onClick={() => handleClick(index)}
              >
                <PersonalInformation key={person.name + "name"}>
                  {person.name}
                </PersonalInformation>
                <PersonalInformation key={person.name + "birthday"}>
                  {person.birthday}
                </PersonalInformation>
                <PersonalInformation key={person.name + "age"}>
                  {calcAge(person.birthday)} years old
                </PersonalInformation>
              </Person>
              {ppl.length > 1 && index < ppl.length - 1 ? (
                <SeparationLine key={person.name + "line"} />
              ) : (
                ""
              )}
            </React.Fragment>
          ) : (
            <></>
          );
        })}
      </MonthContainer>
    </>
  );
};

export default MonthlyBirthdayList;
