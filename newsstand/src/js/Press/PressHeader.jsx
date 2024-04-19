import styled from "styled-components";
import { useState } from "react";
import { PressContents } from "./Contents/PressContents";

function PressHeader({ setGrid }) {
  const [select, setSelect] = useState('all'); 

  const allMedia = () => {
    setGrid(true);
    setSelect('all');
  };

  const subscribedMedia = () => {
    setGrid(false);
    setSelect('subscribed'); 
  };

  return (
    <Header>
      <div className="press-title">
        <span onClick={allMedia} style={{ fontWeight: select === 'all' ? 'bold' : 'normal' }}>전체 언론사</span>
        <span onClick={subscribedMedia} style={{ fontWeight: select === 'subscribed' ? 'bold' : 'normal' }}>내가 구독한 언론사</span>
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

export function Press() {
  const [grid, setGrid] = useState(true);
  return (
    <PressWrap>
      <PressHeader setGrid={setGrid} />
      <PressContents grid={grid} setGrid={setGrid} />
    </PressWrap>
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

const PressWrap = styled.div`
  display: flex;
  flex-direction: column;
`;