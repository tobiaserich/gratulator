import styled from "@emotion/styled";

const DarkenBackground = styled("div")`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 999;
`;

export default DarkenBackground;
