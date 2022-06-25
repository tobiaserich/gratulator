import React from "react";
import styled from "@emotion/styled";
import BurgerMenu from "./BurgerMenu";
import Button from "./Button";
import { set } from "idb-keyval";

const Menu = styled("div")`
  position: absolute;
  direction: ltr;
  color: black;
  text-shadow: none;
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

const ShadowElement = styled("div")`
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0;
  z-index: 50;
`;

const MainMenu = ({ setFormVisible, getBirthdayList }) => {
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
        <>
          <Menu animation={animation}>
            <Button
              size="big"
              clickType="normal"
              handleClick={() => {
                setFormVisible(true);
                handleClick();
              }}
            >
              Add new Person
            </Button>
          </Menu>
          <ShadowElement onClick={() => handleClick()} />
        </>
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
