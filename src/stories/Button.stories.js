import React from "react";
import ButtonComponent from "../components/Button";

export default {
  title: "components",
  component: ButtonComponent,
};

export const button = () => {
  return (
    <>
      <br />
      <span>Big button</span>
      <br />
      <br />
      <ButtonComponent size="big">Add new Person</ButtonComponent>
      <br />
      <span>Small button</span>
      <br />
      <br />
      <ButtonComponent size="small">cancel</ButtonComponent>
    </>
  );
};
