import styled from "styled-components";
import { useState, useEffect, useReducer } from "react";
import { BarsOutlined, AppstoreOutlined } from "@ant-design/icons";
import { PressContent } from "./PressContent/PressContent";
import { fetchData } from "../../utils/utils";

const initialState = {
  media: "allMedia", /** all, subscribed */
  viewType: "grid", /** grid, list */
  currentPage: 0,
  news: [], /** news data */
  subNews: [] /** subscribed news data */
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_MEDIA':
      return { ...state, media: action.payload };
    case 'SET_VIEW_TYPE':
      return { ...state, viewType: action.payload };
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload };
    case 'SET_NEWS':
      return { ...state, news: action.payload };
    case 'SET_SUB_NEWS':
      return { ...state, subNews: action.payload };
    default:
      return state;
  }
}

export function Press() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchData("http://localhost:3000/api/channels", news => {
      dispatch({ type: 'SET_NEWS', payload: news });
    });
  }, []);

  return (
    <PressWrap>
      <PressHeader
        setMedia={media => dispatch({ type: 'SET_MEDIA', payload: media })}
        setViewType={viewType => dispatch({ type: 'SET_VIEW_TYPE', payload: viewType })}
        setCurrentPage={page => dispatch({ type: 'SET_CURRENT_PAGE', payload: page })}
        setNews={news => dispatch({ type: 'SET_NEWS', payload: news })}
        setSubNews={subNews => dispatch({ type: 'SET_SUB_NEWS', payload: subNews })}      
        />
      <PressContent
        media={state.media}
        viewType={state.viewType} 
        news={state.news}
        subNews={state.subNews}
        currentPage={state.currentPage}
        setCurrentPage={page => dispatch({ type: 'SET_CURRENT_PAGE', payload: page })}
      />
    </PressWrap>
  );
}

function PressHeader({ media, setMedia, viewType, setViewType, setSubNews, setCurrentPage}) {
  const gridView = () => {
    setViewType("grid");
    setCurrentPage(0);
  };
  
  const listView = () => {
    setViewType("list");
    setCurrentPage(0);
  };

  const allMedia = () => {
    setMedia("allMedia");
    setCurrentPage(0);
  }

  const subscribedMedia = async () => {
    setMedia("subscribedMedia");

    const response = await fetch("http://localhost:3000/api/users/channels");
    const data = await response.json();
    setSubNews(data);

    if (data.length === 0) {
      allMedia();
      alert("구독한 언론사가 없습니다.");
    }
    setCurrentPage(0);
  };

  return (
    <Header>
      <div className="press-title">
        <span
          onClick={allMedia}
          style={{ fontWeight: media === "allMedia" ? "bold" : "normal" }}
        >
          전체 언론사
        </span>
        <span
          onClick={subscribedMedia}
          style={{ fontWeight: media === "subscribedMedia" ? "bold" : "normal" }}
        >
          내가 구독한 언론사
        </span>
      </div>
      <StyledDiv>
        <StyledButton className="list-view-btn" onClick={listView}>
          <BarsOutlined
            style={{ color: viewType === "list" ? "blue" : "gray" }}
          />
        </StyledButton>
        <StyledButton className="grid-view-btn" onClick={gridView}>
          <AppstoreOutlined
            style={{ color: viewType === "grid" ? "blue" : "gray" }}
          />
        </StyledButton>
      </StyledDiv>
    </Header>
  );
}

const PressWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
  height: 30px;

  .press-title span {
    margin-right: 20px;
    font-size: 20px;
  }
`;

const StyledDiv = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  font-size: 25px;
`;
