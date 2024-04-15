import { styled } from "styled-components";

function getCurrentDate() {
  const date = new Date();
  const weekDay = ["일", "월", "화", "수", "목", "금", "토"];
  const dayName = weekDay[date.getDay()];
  return `${date.toLocaleDateString()} ${dayName}요일`;
}

export function CustomDate() {
  return <StyledSpan>{getCurrentDate()}</StyledSpan>;
}

const StyledSpan = styled.span`
  margin-right: 20px;
  font-size: 20px;
`;
