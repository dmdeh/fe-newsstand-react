import { styled } from "styled-components";
import { getCurrentDate } from "../utils/utils.js";

export function CustomDate() {
  return <StyledSpan>{getCurrentDate()}</StyledSpan>;
}

const StyledSpan = styled.span`
  margin-right: 20px;
  font-size: 20px;
`;
