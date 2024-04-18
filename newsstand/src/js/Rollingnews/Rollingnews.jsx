import { styled } from "styled-components";

export function Rollingnews() {
  return (
    <StyledDiv>
      <div className="rollingnews-contents">
        <div className="rollingnews-left"></div>
        <div className="rollingnews-right"></div>
      </div>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  .rollingnews-contents {
    display: flex;
    justify-content: space-between;
  }

  .rollingnews-left,
  .rollingnews-right {
    width: 49%;
    height: 80px;
    background-color: #ececec;
  }
`;
