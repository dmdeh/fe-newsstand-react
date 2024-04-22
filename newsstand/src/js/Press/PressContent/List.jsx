import styled from "styled-components";
import { useState } from "react";
import { news } from "../../../data/news.json";
import { Subscription } from "./Subscribe";

function createList() {
  return (
    <StyledDesc>
      <div className="newsgroup-list-top"></div>
      <div className="newsgroup-list-left"></div>
      <div className="newsgroup-list-right"></div>
    </StyledDesc>
  );
}

function renderList(currentPage, media) {
  return (
    <>
      <h1>{`${media} 뉴스리스트`}</h1>
      {createList()}
    </>
  );
}

export function List({ currentPage, media }) {
  return <StyledList>{renderList(currentPage, media)}</StyledList>;
}

const StyledList = styled.div`
  border: 2px solid #d5d5d5;
  height: 400px;
  position: relative;
`;

const StyledDesc = styled.div`
`;