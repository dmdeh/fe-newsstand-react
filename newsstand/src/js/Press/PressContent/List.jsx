import styled from "styled-components";
import { useState } from "react";
import { news } from "../../../data/news.json";
import { Subscription } from "./Subscribe";

function Catagory() {
  return (
    <>
      <CatagoryBtn>종합/경제</CatagoryBtn>
      <CatagoryBtn>방송통신</CatagoryBtn>
      <CatagoryBtn>IT</CatagoryBtn>
      <CatagoryBtn>영자지</CatagoryBtn>
      <CatagoryBtn>스포츠/연예</CatagoryBtn>
      <CatagoryBtn>매거진/전문지</CatagoryBtn>
      <CatagoryBtn>지역</CatagoryBtn>
    </>
  );
}

function createList(index, media) {
  // subNews 추가 예정
  // const item = media === "all" ? news[index] : subNews[index];
  const item = news[index];
  const sideNews = item.sideNews.map((newsItem) => (
    <p key={newsItem.title}>{newsItem.title}</p>
  ));

  return (
    <>
      <Top>
        <img src={item.logoImageSrc} />
        <span>{item.editedTime}</span>
        <Subscription />
      </Top>
      <StyledDesc>
        <Left>
          <img src={item.headline.thumbnailSrc} />
          <span>{item.headline.title}</span>
        </Left>
        <Right>{sideNews}</Right>
      </StyledDesc>
    </>
  );
}

function renderList(currentPage, media) {
  return <>{createList(currentPage, media)}</>;
}

export function List({ currentPage, media }) {
  return (
    <StyledList>
      <Catagory />
      {renderList(currentPage, media)}
    </StyledList>
  );
}
const CatagoryBtn = styled.button`
  height: 50px;
  font-size: 20px;
  margin: 0px 15px;
`;

const StyledList = styled.div`
  border: 2px solid #d5d5d5;
  height: 400px;
  position: relative;
`;

const Top = styled.div`
  display: flex;
  margin: 20px;
  align-items: center;
  span {
    margin-left: 2rem;
  }
  Subscription {
    display: block; // 안먹는다 subscribe에서 수정해야할듯
  }
`;

const StyledDesc = styled.div`
  display: flex;
`;

const Left = styled.div`
  display: flex;
  width: 350px;
  flex-direction: column;
  align-items: center;
  img {
    height: 200px;
    width: 320px;
  }
  span {
    margin: 20px;
  }
`;

const Right = styled.div`
  width: 650px;
  margin-left: 2rem;
  p:hover {
    text-decoration: underline;
  }
`;
