import styled from "@emotion/styled";

const ButtonBar = styled("div")`
  display: flex;
  margin-top: ${({ errorMessageActive }) => {
    let sum = 40;
    if (!errorMessageActive.name && errorMessageActive.name !== null) {
      sum = sum - 8;
    }
    if (!errorMessageActive.date && errorMessageActive.date !== null) {
      sum = sum - 32;
    }
    return `${sum}px;`;
  }};
`;

export default ButtonBar;
