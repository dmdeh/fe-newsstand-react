import styled from "styled-components";
import { useState } from "react";
import { BarsOutlined, AppstoreOutlined } from "@ant-design/icons";
import { PressContent } from "./PressContent/PressContent";

export function Press({news}) {
  // media & view 값 선언
  const [media, setMedia] = useState("all"); /** all, subscribed */
  const [view, setView] = useState("grid"); /** grid, list */

  return (
    <PressWrap>
      <PressHeader media={media} setMedia={setMedia} view={view} setView={setView} />
      <PressContent media={media} view={view} news={news} />
    </PressWrap>
  );
}

function PressHeader({ media, setMedia, view, setView }) {
  const allMedia = () => {
    setMedia("all");
  };

  const subscribedMedia = () => {
    setMedia("subscribed");
  };

  const gridView = () => {
    setView("grid");
  };

  const listView = () => {
    setView("list"); // list 필요
  };

  return (
    <Header>
      <div className="press-title">
        <span onClick={allMedia} style={{ fontWeight: media === 'all' ? 'bold' : 'normal' }}>전체 언론사</span>
        <span onClick={subscribedMedia} style={{ fontWeight: media === 'subscribed' ? 'bold' : 'normal' }}>내가 구독한 언론사</span>
      </div>
      <StyledDiv>
      <StyledButton className="list-view-btn" onClick={listView}>
        <BarsOutlined style={{ color: view === 'list' ? 'blue' : 'gray' }} />
      </StyledButton>
      <StyledButton className="grid-view-btn" onClick={gridView}>
        <AppstoreOutlined style={{ color: view === 'grid' ? 'blue' : 'gray' }} />
      </StyledButton>
    </StyledDiv>
    </Header>
  );
}

const PressWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

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
`;

const StyledDiv = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  font-size: 25px;
`;
