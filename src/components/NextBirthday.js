import React from "react";
import styled from "@emotion/styled";
import imgPlaceholder from "../assets/ImgPlaceholder.svg";
import calcAge from "../helper/calcAge";
import ArrowButton from "./ArrowButton.js";

const FlexContainer = styled("article")`
  font-size: 14px;
  height: 70x;
  width: 180px;
  display: flex;
  background-color: #edede9;
  border-radius: 10px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  padding: 10px;
  margin: auto;
  margin-top: 17px;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Arima Madurai";
  position: relative;
`;

const InfoContainer = styled("div")`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 5px 0;
`;

const Info = styled("div")`
  max-width: 125px;
  line-break: loose;
  text-align: center;
  line-height: 20px;
`;

const Age = styled("div")`
  margin: 0 auto;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: #a2d2ff;
`;

const ImageContainer = styled("img")`
  height: 80px;
  width: 80px;
  margin: auto;
  position: relative;
  top: -70px;
  margin-bottom: -70px;
`;

const CounterBubble = styled("div")`
  height: 28px;
  width: 28px;
  display: flex;
  position: absolute;
  left: 165px;
  top: -15px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #a2d2ff;
  padding-top: 1px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
`;

const NextBirthday = ({ birthdayList }) => {
  console.log(birthdayList);
  const [showPersonNo, setShowPersonNo] = React.useState(0);
  const handleClick = (dir) => {
    if (dir === "left" && showPersonNo !== 0) {
      setShowPersonNo(showPersonNo - 1);
    }
    if (dir === "right" && showPersonNo < birthdayList.length - 1) {
      setShowPersonNo(showPersonNo + 1);
    }
  };
  return (
    <>
      <FlexContainer>
        {birthdayList?.length > 1 ? (
          <>
            <CounterBubble>+{birthdayList?.length - 1}</CounterBubble>
            {showPersonNo === 0 ? (
              <></>
            ) : (
              <ArrowButton
                direction="left"
                onClick={() => handleClick("left")}
                aria-label="previous"
              />
            )}
            {showPersonNo === birthdayList.length - 1 ? (
              <></>
            ) : (
              <ArrowButton
                direction="right"
                onClick={() => handleClick("right")}
                aria-label="next"
              />
            )}
          </>
        ) : (
          ""
        )}
        {birthdayList[0]?.profileImg ? (
          <ImageContainer src={imgPlaceholder} />
        ) : (
          <></>
        )}
        <InfoContainer>
          <Info>{birthdayList[showPersonNo]?.name}</Info>
          <Info>{birthdayList[showPersonNo]?.birthday}</Info>
        </InfoContainer>
        <Age>{calcAge(birthdayList[showPersonNo]?.birthday)} years old</Age>
      </FlexContainer>
    </>
  );
};

export default NextBirthday;
