import React from "react";
import Bigbutton from "../components/BigButton";

export default {
  title: "components",
  component: Bigbutton,
};

export const button = () => {
  return (
    <>
      <Bigbutton>Add new Person</Bigbutton>
      {"    "}
      <Bigbutton>Delete Person</Bigbutton>
    </>
  );
};
