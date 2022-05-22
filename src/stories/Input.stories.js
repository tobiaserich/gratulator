import React from "react";
import InputComp from "../components/Input";

export default {
  title: "components",
  component: InputComp,
  argTypes: {
    forComponent: {
      control: { type: "radio", options: ["name", "bDay"] },
      defaultValue: "name",
    },
  },
};

export const Input = (args) => <InputComp {...args}></InputComp>;
