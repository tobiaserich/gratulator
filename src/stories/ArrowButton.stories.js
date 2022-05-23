import React from "react";
import ArrowButtonComponent from "../components/ArrowButton";
export default {
  title: "components",
  component: ArrowButtonComponent,
};

export const ArrowButton = () => (
  <>
    <ArrowButtonComponent direction="right" />
    <br />
    <br />
    <ArrowButtonComponent direction="left" />
  </>
);
