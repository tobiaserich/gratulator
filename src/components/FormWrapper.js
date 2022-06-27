import styled from "@emotion/styled";

const InputWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BirthdayWrapper = styled(InputWrapper)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: normal;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: -15px;
`;

export { InputWrapper, BirthdayWrapper };
