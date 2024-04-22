import styled from "styled-components";
import { useState } from "react";
import { shuffle } from "../../../utils/utils";
import { news } from "../../../data/news.json";
import { Subscription } from "./Subscribe";

const PAGE_SIZE = 24;

function getLogoImage(news) {
  return news.map((item) => item.logoImageSrc);
}

const shuffleLogos = shuffle(getLogoImage(news));

/** 전체 언론사*/
function createGrid(index, media) { 
  const [subscribedLogos, setSubscribedLogos] = useState([]);

  const handleSubscription = (logoImage) => {
    setSubscribedLogos(prevLogos => [...prevLogos, logoImage]);
  };

  //all이면 shuffleLogos, subscribed면 subscribedLogos
  const logos = media === "all" ? shuffleLogos : subscribedLogos;

  if (index < logos.length) {
    return (
      <StyledLogo className="press-logo" key={index}>
        <img src={logos[index]} alt={`Logo ${index}`} />
        <Subscription logoImage={logos[index]} handleSubscription={handleSubscription} />
      </StyledLogo>
    );
  }
}

function renderGrid(page, media) {
  const gridElements = [];
  for (let index = 0; index < PAGE_SIZE; index++) {
    gridElements.push(createGrid(page * PAGE_SIZE + index, media));
  }
  return gridElements;
}

export function Grid({ currentPage, media }) {
  return <StyledGrid>{renderGrid(currentPage, media)}</StyledGrid>;
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
    img {
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

