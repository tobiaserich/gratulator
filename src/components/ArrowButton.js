import styled from "@emotion/styled";
import arrow from "../assets/arrow.svg";

const ArrowButton = styled("button")`
  width: 26px;
  height: 26px;
  position: absolute;
  background: #d9d9d9;
  border: 1px solid #000000;
  border-radius: 10px;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: center;
  ${({ direction }) => {
    if (direction === "right") {
      return "transform:rotate(180deg);box-shadow: -2px -2px 4px rgba(0, 0, 0, 0.6);top:40px;left:165px;";
    } else {
      return "box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);top:40px;left:-13px;";
    }
  }}

  :hover {
    ${({ direction }) => {
      if (direction === "right") {
        return "box-shadow: -2px -2px 6px rgba(0, 0, 0, 0.6);";
      } else {
        return "box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);";
      }
    }}
  }
  :active {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.6);
  }
`;

export default ArrowButton;
