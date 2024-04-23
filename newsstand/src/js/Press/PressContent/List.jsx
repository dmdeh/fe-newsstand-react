import styled from "styled-components";
import { useState } from "react";
import { news } from "../../../data/news.json";
import { Subscription } from "./Subscribe";

function Category() {
  const categegories = new Set(news.map((item) => item.category));
  const cat = Array.from(categegories);

  return (
    <StyledCategagory>
      {cat.map((category, index) => (
        <CategagoryBtn key={index}>{category}</CategagoryBtn>
      ))}
    </StyledCategagory>
  );
}

function createList(index, media, view, news) {
  // subNews 추가 예정
  // const item = media === "all" ? news[index] : subNews[index];

  const item = news[index];
  const { logoImageSrc, editedTime, headline, sideNews } = item;
  const sideNewsList = sideNews.map((newsItem) => (
    <p key={newsItem.title}>{newsItem.title}</p>
  ));
  const [subscribedLogos, setSubscribedLogos] = useState([]);

  const handleSubscription = (logoImage) => {
    setSubscribedLogos((prevLogos) => [...prevLogos, logoImage]);
  };

  return (
    <>
      <Top>
        <img src={logoImageSrc} />
        <span>{editedTime}</span>
        <Subscription
          view={view}
          logoImage={logoImageSrc}
          handleSubscription={handleSubscription}
        />
      </Top>
      <StyledDesc>
        <Left>
          <img src={headline.thumbnailSrc} />
          <span>{headline.title}</span>
        </Left>
        <Right>{sideNewsList}</Right>
      </StyledDesc>
    </>
  );
}

function renderList(currentPage, media, view, news) {
  return <>{createList(currentPage, media, view, news)}</>;
}

export function List({ currentPage, media, view, news }) {
  return (
    <StyledList>
      <Category />
      {renderList(currentPage, media, view, news)}
    </StyledList>
  );
}

const StyledCategagory = styled.div`
  background: #ececec;
`;

const CategagoryBtn = styled.button`
  color: #5c5c5c;
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
  margin: 15px;
  align-items: center;
  span {
    margin: 0px 2rem;
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
    margin: 0px 20px;
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
