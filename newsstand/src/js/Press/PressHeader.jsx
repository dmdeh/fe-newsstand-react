import styled from "styled-components";

export function PressHeader() {
  return (
    <Header>
      <div className="press-title">
        <span>전체 언론사</span> 
        <span>내가 구독한 언론사</span>
      </div>
      <div className="view-btn">
        <button className="list-view-btn">
          <img src="./public/img/list_off.png" />
        </button>
        <button className="grid-view-btn">
          <img src="./public/img/grid_off.png" />
        </button>
      </div>
    </Header>
  );
}

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;

  .press-title span {
    margin-right: 20px;
    font-size: 20px;
  }

  .view-btn {
    display: flex;
  }
`;
