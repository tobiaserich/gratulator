import React from "react";
import styled from "@emotion/styled";
import NextBirthday from "../components/NextBirthday";

export default {
  title: "components",
  component: NextBirthday,
  argTypes: {
    profileImg: {
      options: [true, false],
      control: { type: "select" },
    },
  },
};

const Spacer = styled("div")`
  height: 60px;
`;

export const NextBirthdayComponent = (args) => {
  return (
    <>
      {args.profileImg ? <Spacer /> : <></>}
      <NextBirthday profileImg={args.profileImg}></NextBirthday>
    </>
  );
};
