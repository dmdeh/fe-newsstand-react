import styled from "styled-components";
import { Grid } from "./Grid";
import { List } from "./List";
import { Swiper } from "./Swiper";

export function PressContent({ media, viewType, news, subNews, currentPage, setCurrentPage }) {
  return (
    <Content>
      {viewType === "grid" ? (
        <Grid
          news={news} subNews={subNews}
          currentPage={currentPage}
          media={media} viewType={viewType}
        />
      ) : (
        <List
          news={news} subNews={subNews}
          currentPage={currentPage} setCurrentPage={setCurrentPage}
          media={media} viewType={viewType}
        />
      )}
      <Swiper
        news={news}
        currentPage={currentPage} setCurrentPage={setCurrentPage}
        viewType={viewType}
      />
    </Content>
  );
}

const Content = styled.div`
  position: relative;
`;
