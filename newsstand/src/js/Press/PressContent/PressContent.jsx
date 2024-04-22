import styled from "styled-components";
import { useState } from "react";
import { Grid } from "./Grid";
import { List } from "./List";
import { Swiper } from "./Swiper";

export function PressContent({ media, view }) {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <Content>
      {view === "grid" ? (<Grid currentPage={currentPage} media={media} view={view}/>) : (<List currentPage={currentPage} media={media} view={view}/>)}
      <Swiper currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </Content>
  );
}

const Content = styled.div`
  position: relative;
`;