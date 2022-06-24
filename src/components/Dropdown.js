import React from "react";
import styled from "@emotion/styled";
import ArrowDown from "../assets/ArrowDown.svg";
import { DateContext } from "../context/context";

const DropdownContainer = styled("div")`
  color: black;
  display: inline-flex;
  font-family: "Arima Madurai";
  flex-direction: column;
  overflow: hidden;
  margin: 0 3px;
  margin-top: 2px;
  position: relative;
  ${({ status }) =>
    status === false
      ? { maxHeight: "30px" }
      : "overflow: scroll;scrollbar-width:thin;max-height:240px;"};
  border: 1px solid black;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  background-color: #d9d9d9;
  > {
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

const Dropdown = ({ dropdownItems, menuFor, dropdownActive }) => {
  const [status, setStatus] = React.useState(false);
  const context = React.useContext(DateContext);
  React.useEffect(() => {
    if (dropdownActive.closeDropdown === true) {
      setStatus(false);
    }
  }, [dropdownActive]);
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

  const handleKey = (event) => {
    switch (event.key) {
      case "ArrowDown":
        if (context[menuFor] > 0 && context[menuFor] < dropdownItems.at(-1)) {
          context.changeDate(menuFor, context[menuFor] + 1);
        }
        break;
      case "ArrowUp":
        if (context[menuFor] > 1 && context[menuFor] > dropdownItems[0]) {
          context.changeDate(menuFor, context[menuFor] - 1);
        }
        break;
      case "Enter":
        setStatus(!status);
        break;
      default:
        break;
    }
  };

  const handleStatusChange = (e) => {
    e.currentTarget.scroll(0, 0);
    setStatus(!status);
    dropdownActive.setCloseDropdown(false);
  };
  return (
    <>
      <DropdownContainer
        data-testid="dropdown"
        tabIndex={0}
        onKeyUp={(event) => {
          handleKey(event);
        }}
        onClick={handleStatusChange}
        status={status}
      >
        {[context[menuFor], ...dropdownItems]?.map((item, index) => {
          if (index === 0) {
            return (
              <>
                <Item
                  data-testid="firstElement"
                  hoverable={false}
                  key={item + index}
                >
                  {months[item - 1] || item}
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
                onClick={() => {
                  context.changeDate(menuFor, item);
                }}
                isCurrentValue={item === context[menuFor]}
                hoverable={true}
                key={item + index}
              >
                {menuFor === "month" ? months[item - 1] : item}
              </Item>
            );
          }
        })}
      </DropdownContainer>
    </>
  );
};

export default Dropdown;
