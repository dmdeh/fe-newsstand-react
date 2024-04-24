import styled from "styled-components";
import { useState, useEffect } from "react";
import { shuffle } from "../../../utils/utils";
import { Subscription } from "./Subscribe";

const PAGE_SIZE = 24;

function getNews(news) {
  return news.map((item) => ({ id: item.id, logoImageSrc: item.logoImageSrc }));
}

const shuffleLogosWithId = (news) => shuffle(getNews(news));

function createGrid(index, media, viewType, news, subNews) {
  const [allLogos, setAllLogos] = useState([]);
  const [subscribedLogos, setSubscribedLogos] = useState([]);

  useEffect(() => {
    if (media === "allMedia") {
      setAllLogos(shuffleLogosWithId(news));
    } else setSubscribedLogos(getNews(subNews));
  }, [news, subNews]);

  const logos = media === "allMedia" ? allLogos : subscribedLogos;

  if (index < logos.length) {
    const { id, logoImageSrc } = logos[index];
    return (
      <StyledLogo className="press-logo" key={index}>
        <img src={logoImageSrc} alt={id} />
        <Subscription
          id={id}
          viewType={viewType}
          logoImage={logoImageSrc}
          setSubscribedLogos={setSubscribedLogos}
        />
      </StyledLogo>
    );
  }
}

function renderGrid(page, media, viewType, news, subNews) {
  const gridElements = [];
  for (let index = 0; index < PAGE_SIZE; index++) {
    gridElements.push(
      createGrid(page * PAGE_SIZE + index, media, viewType, news, subNews)
    );
  }
  return gridElements;
}

export function Grid({ currentPage, media, viewType, news, subNews }) {
  return (
    <StyledGrid>
      {renderGrid(currentPage, media, viewType, news, subNews)}
    </StyledGrid>
  );
}

const StyledGrid = styled.div`
  border-top: 2px solid #d5d5d5;
  border-left: 2px solid #d5d5d5;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, auto);
  height: 400px;
  position: relative;
`;

const StyledLogo = styled.div`
  border-right: 2px solid #d5d5d5;
  border-bottom: 2px solid #d5d5d5;
  padding: 10px;
  font-size: 30px;
  text-align: center;
  background: white;
  position: relative;
  &:hover {
    background: #f6f7f9;
    > button {
      display: block;
    }
    > img {
      visibility: hidden;
    }
  }
  img {
    visibility: visible;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 2rem;
  }
`;
