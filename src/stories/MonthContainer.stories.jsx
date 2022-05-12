import React from "react";
import MonthContainer from "../components/MonthContainer";

export default {
  title: "components",
  component: MonthContainer,
  argTypes: {
    dir: {
      options: ["left", "right"],
      control: { type: "radio" },
    },
  },
};

export const Monthcontainer = (args) => {
  return <MonthContainer dir={args.dir}></MonthContainer>;
};

Monthcontainer.args = {
  dir: "left",
};
