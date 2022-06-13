import React from "react";
import styled from "@emotion/styled";
import BurgerMenu from "./BurgerMenu";

const Menu = styled("div")`
  position: absolute;
  direction: ltr;
  color: white;
  top: 70%;
  right: 0px;
  z-index: 100;
  min-height: 100px;
  background-color: #413a50;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 30px 0 10px 10px;
  width: 100%;
  transform-origin: top right;

  animation: ${({ animation }) => animation} 0.5s ease-in both;

  @keyframes fadeOut {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(0);
    }
  }

  @keyframes fadeIn {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }
`;

const MainMenu = () => {
  const [menuActive, setMenuActive] = React.useState(false);
  const [animation, setAnimation] = React.useState("initial");
  const [timerId, setTimerId] = React.useState();
  const handleClick = () => {
    if (menuActive === true) {
      setAnimation("fadeOut");
      const timer = setTimeout(() => {
        setMenuActive(false);
      }, 500);
      setTimerId(timer);
    } else {
      clearTimeout(timerId);
      setAnimation("fadeIn");
      setMenuActive(true);
    }
  };

  return (
    <>
      {menuActive ? (
        <Menu animation={animation}>
          Consequatur perferendis quam laboriosam fugiat quia optio vitae.
        </Menu>
      ) : (
        <></>
      )}
      <div onClick={handleClick}>
        <BurgerMenu menuAnimation={animation}></BurgerMenu>
      </div>
    </>
  );
};

export default MainMenu;
