import React from "react";
import styled from "@emotion/styled";
import ArrowDown from "../assets/ArrowDown.svg";

const DropdownContainer = styled("div")`
  display: inline-flex;
  font-family: "Arima Madurai";
  flex-direction: column;
  overflow: hidden;
  margin: 0 3px;
  margin-top: 2px;
  position: relative;
  ${({ status }) =>
    status === false
      ? "max-height: 20px;"
      : "overflow: scroll;scrollbar-width:thin;max-height:240px;"};
  border: 1px solid black;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  background-color: #d9d9d9;
  > :last-child {
    :after {
      display: inline-block;
      content: "";
      width: 20px;
    }
  }
`;

const Image = styled("img")`
  position: absolute;
  right: 5px;
  bottom: 47%;
`;

const Item = styled("div")`
  position: relative;

  ::before {
    display: inline-block;
    content: "";
    width: 5px;
  }

  ${({ hoverable }) =>
    hoverable ? ":hover{background-color: #A2D2FF;};" : ""};
  ${({ isCurrentValue }) =>
    isCurrentValue ? "background-color:#A2D2FF;" : ""};
`;

const Dropdown = ({ dropdownItems, changeDate = () => {}, menuFor }) => {
  const [status, setStatus] = React.useState(false);
  const [currentValue, setCurrentValue] = React.useState(dropdownItems[0]);

  React.useEffect(() => {
    changeDate({ name: menuFor, value: currentValue });
  }, [currentValue]);

  React.useEffect(() => {
    if (menuFor === "month") {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const month = months[new Date().getMonth()];
      const position = dropdownItems.indexOf(month);
      setCurrentValue(dropdownItems[position]);
    } else if (menuFor === "year") {
      setCurrentValue(new Date().getFullYear());
    }
  }, []);

  const handleClick = (item) => {
    setCurrentValue(item);
  };

  const isCurrentValue = (item) => {
    return item === currentValue ? true : false;
  };

  const findCurrentPositionArr = () => {
    const currentPos = dropdownItems.findIndex(
      (value) => value === currentValue
    );
    return currentPos;
  };
  const handleKey = (event) => {
    const currentPos = findCurrentPositionArr();
    switch (event.key) {
      case "ArrowDown":
        if (currentPos < dropdownItems.length - 1) {
          setCurrentValue(dropdownItems[currentPos + 1]);
        }
        break;
      case "ArrowUp":
        if (currentPos >= 1) {
          setCurrentValue(dropdownItems[currentPos - 1]);
        }
        break;
      case "Enter":
        setStatus(!status);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <DropdownContainer
        data-testid="dropdown"
        tabIndex={0}
        onKeyUp={(event) => handleKey(event)}
        onClick={() => setStatus(!status)}
        status={status}
      >
        {[currentValue, ...dropdownItems]?.map((item, index) => {
          if (index === 0) {
            return (
              <>
                <Item
                  data-testid="firstElement"
                  hoverable={false}
                  onClick={() => handleClick(item)}
                  key={item + index}
                >
                  {item < 10 ? `0${item}` : item}
                  <Image
                    src={ArrowDown}
                    key={item + index + "img"}
                    alt="Arrow down"
                  />
                </Item>
              </>
            );
          } else {
            return (
              <Item
                onClick={() => handleClick(item)}
                isCurrentValue={isCurrentValue(item)}
                hoverable={true}
                key={item + index}
              >
                {item < 10 ? `0${item}` : item}
              </Item>
            );
          }
        })}
      </DropdownContainer>
    </>
  );
};

export default Dropdown;
