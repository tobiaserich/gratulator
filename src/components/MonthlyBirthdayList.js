import React from "react";
import styled from "@emotion/styled";
import MonthContainer from "./MonthContainer";
import SeparationLine from "./SeparationLine";
import calcAge from "../helper/calcAge";

const Person = styled("div")`
  max-width: 255px;
  width: 100%;
  display: flex;
  padding: 0 10px;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AntiRotationContainer = styled("div")`
  transform: rotate(
    ${({ dir }) =>
      dir.rotation ? (dir.dir === "right" ? "-2deg" : "2deg") : "0deg"}
  );
  ::before,
  ::after {
    content: "";
    display: block;
    height: 10px;
  }
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

const MonthlyBirthdayList = ({ ppl, counter = "all", dir, monthName }) => {
  const [ref, setRef] = React.useState("");

  const handleRef = (refInput) => {
    setRef(refInput);
  };
  const rotation = ref.current?.offsetHeight < 600 ? true : false;

  return (
    <>
      <MonthContainer
        handleRef={handleRef}
        dir={{ dir: dir, rotation: rotation }}
      >
        <AntiRotationContainer dir={{ dir: dir, rotation: rotation }}>
          <H2>{monthName}</H2>
          {ppl.map((person, index) => {
            return index <=
              (typeof counter === "string" ? ppl.length - 1 : counter) ? (
              <>
                <Person key={person.name + "Container"}>
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
              </>
            ) : (
              <></>
            );
          })}
        </AntiRotationContainer>
      </MonthContainer>
    </>
  );
};

export default MonthlyBirthdayList;
