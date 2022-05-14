import React from "react";
import styled from "@emotion/styled";
import MonthContainer from "./MonthContainer";
import SeparationLine from "./SeparationLine";

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
  margin: 0 0 10px 7px;
  padding-left: 10px;
`;

const MonthlyBirthdayList = ({ ppl, counter = "all", dir }) => {
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
          <H2>December</H2>
          {ppl.map((person, index) => {
            return index <=
              (typeof counter === "string" ? ppl.length - 1 : counter) ? (
              <>
                <Person>
                  <PersonalInformation>{person.name}</PersonalInformation>
                  <PersonalInformation>{person.birthday}</PersonalInformation>
                  <PersonalInformation>
                    {person.age} years old
                  </PersonalInformation>
                </Person>
                <SeparationLine />
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
