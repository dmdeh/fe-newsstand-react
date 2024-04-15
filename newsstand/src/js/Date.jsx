import { styled } from "styled-components";
export function Date() {
  return (
    <>
      <StyledSpan>2024.4.15 월요일</StyledSpan>
    </>
  );
}

const StyledSpan = styled.span`
  margin-right: 20px;
  font-size: 20px;
`;
