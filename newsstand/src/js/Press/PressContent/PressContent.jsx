import styled from "styled-components";
import { useEffect, useState } from "react";
import { Grid } from "./Grid";
import { List } from "./List";
import { Swiper } from "./Swiper";

export function PressContent({ media, viewType }) {
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
      {viewType === "grid" ? (
      <Grid news={news} currentPage={currentPage} media={media} viewType={viewType} />) 
        : (<List news={news} currentPage={currentPage} media={media} viewType={viewType} />
        )}
      <Swiper currentPage={currentPage} setCurrentPage={setCurrentPage} viewType={viewType}/>
    </Content>
  );
}

const Content = styled.div`
  position: relative;
`;
