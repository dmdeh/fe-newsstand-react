import styled from "styled-components";
import { Subscription } from "./Subscribe";
import { shuffle } from "../utils/utils";
import { logoImageSrc } from "../data/newsLogos.json";

const PAGE_SIZE = 24;

export function Presscompany() {
  return <StyledGrid className="presscompany">{renderGrid(0)}</StyledGrid>;
}

function createGrid(index) {
  const shuffleLogos = shuffle(logoImageSrc);
  if (index < shuffleLogos.length) {
    return (
      <StyledLogo className="presscompany-logo" key={index}>
        <img src={shuffleLogos[index]} alt={`Logo ${index}`} />
        <Subscription />
      </StyledLogo>
    );
  }
}

function renderGrid(page) {
  const gridElements = [];
  for (let index = 0; index < PAGE_SIZE; index++) {
    gridElements.push(createGrid(page * PAGE_SIZE + index));
  }
  return gridElements;
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
  img {
    visibility: visible;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 2rem;
  }
`;
