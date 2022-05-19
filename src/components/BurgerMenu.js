import React from "react";
import styled from "@emotion/styled";

const SingleBurgerLine = styled("div")`
  width: 25px;
  height: 3px;
  position: relative;
  border-radius: 10px;
  background-color: #a2d2ff;
  animation: ${({ pos, animation }) =>
    animation === "initial" ? "" : `${animation}${pos} 0.5s ease-in both;`};

  @keyframes transformToX1 {
    0% {
    }
    100% {
      transform: rotate(45deg) translateY(10px);
    }
  }
  @keyframes transformToX2 {
    0% {
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes transformToX3 {
    0% {
    }
    100% {
      transform: rotate(-45deg) translateY(-10px);
    }
  }

  @keyframes transformFromX1 {
    0% {
      transform: rotate(45deg) translateY(10px);
    }
    100% {
      transform: rotate(0deg) translateY(0px);
    }
  }
  @keyframes transformFromX2 {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes transformFromX3 {
    0% {
      transform: rotate(-45deg) translateY(-10px);
    }
    100% {
      transform: rotate(0deg) translateY(0px);
    }
  }
`;

const BurgerContainer = styled("div")`
  width: 25px;
  height: 17px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${({ animation }) =>
    animation === "initial" ? "" : `${animation}4 0.5s ease-out both`};
  @keyframes transformToX4 {
    0% {
    }
    100% {
      transform-origin: left;
      transform: rotate(360deg) translateX(5px);
    }
  }
  @keyframes transformFromX4 {
    0% {
      transform-origin: left;
      transform: rotate(360deg) translateX(5px);
    }
    100% {
      transform-origin: left;
      transform: rotate(0deg) translateX(0px);
    }
  }
`;

const BurgerMenu = ({ menuAnimation }) => {
  const [animationName, setAnimationName] = React.useState("initial");
  const animationTrigger = {
    fadeOut: "transformFromX",
    fadeIn: "transformToX",
  };
  React.useEffect(() => {
    setAnimationName(animationTrigger[menuAnimation]);
  }, [menuAnimation]);

  return (
    <BurgerContainer animation={animationName}>
      <SingleBurgerLine animation={animationName} pos={1} />
      <SingleBurgerLine animation={animationName} pos={2} />
      <SingleBurgerLine animation={animationName} pos={3} />
    </BurgerContainer>
  );
};

export default BurgerMenu;
