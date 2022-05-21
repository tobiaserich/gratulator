import React from "react";
import Mainmenu from "../components/MainMenu";
import styled from "@emotion/styled";

const Container = styled("div")`
  position: relative;
  font-family: "Arima Madurai";
  width: 320px;
  height: 300px;
  background-color: #413a50;
  direction: rtl;
  padding: 10px;
`;
export default {
  title: "components",
  component: Mainmenu,
};

export const MainMenu = () => {
  return (
    <Container>
      <Mainmenu />
    </Container>
  );
};
