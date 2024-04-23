import styled from "styled-components";
import { useEffect, useState } from "react";
import { Grid } from "./Grid";
import { List } from "./List";
import { Swiper } from "./Swiper";

export function PressContent({ media, view }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/api/channels");
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }

    fetchData();
  }, []);
  return (
    <Content>
      {view === "grid" ? (<Grid news={news} currentPage={currentPage} media={media} view={view}/>) : (<List news={news} currentPage={currentPage} media={media} view={view}/>)}
      <Swiper currentPage={currentPage} setCurrentPage={setCurrentPage} view={view}/>
    </Content>
  );
}

const Content = styled.div`
  position: relative;
`;