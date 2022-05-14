import React from "react";
import styled from "@emotion/styled";
import imgPlaceholder from "../assets/ImgPlaceholder.svg";

const FlexContainer = styled("div")`
  font-size: 14px;
  height: 70x;
  width: 180px;
  display: flex;
  background-color: #edede9;
  border-radius: 10px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  padding: 10px;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Arima Madurai";
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

const NextBirthday = ({ profileImg }) => {
  console.log(profileImg);
  return (
    <>
      <FlexContainer>
        {profileImg ? <ImageContainer src={imgPlaceholder} /> : <></>}
        <InfoContainer>
          <Info>Sebastian Jonathan Aurelius Fuchs</Info>
          <Info>24.12.1989</Info>
        </InfoContainer>
        <Age>32 years old</Age>
      </FlexContainer>
    </>
  );
};

export default NextBirthday;
