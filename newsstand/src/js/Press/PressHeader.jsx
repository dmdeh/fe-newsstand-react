import styled from "styled-components";
import { useState } from "react";
import { PressContent } from "./PressContent/PressContent";

function PressHeader({ setGrid }) {
  const [select, setSelect] = useState('all'); 
  const [img, setImg] = useState('grid'); 

  const allMedia = () => {
    setGrid(true);
    setSelect('all');
  };

  const subscribedMedia = () => {
    setGrid(false);
    setSelect('subscribed'); 
  };

  const gridView = () => {
    setImg('grid');
  };

  const listView = () => {
    setImg('list'); // setList 만들예정
  };

  return (
    <Header>
      <div className="press-title">
        <span onClick={allMedia} style={{ fontWeight: select === 'all' ? 'bold' : 'normal' }}>전체 언론사</span>
        <span onClick={subscribedMedia} style={{ fontWeight: select === 'subscribed' ? 'bold' : 'normal' }}>내가 구독한 언론사</span>
      </div>
      <div className="view-btn">
        <button className="list-view-btn" onClick={listView}>
          <img src={img === 'list' ? "./public/img/list_on.png": "./public/img/list_off.png"} />
        </button>
        <button className="grid-view-btn" onClick={gridView}>
          <img src={img === 'grid' ? "./public/img/grid_on.png" : "./public/img/grid_off.png"} />
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
      <PressContent grid={grid} setGrid={setGrid} />
    </PressWrap>
  );
}

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
  height: 30px;
  
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