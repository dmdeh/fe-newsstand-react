import { styled, keyframes } from "styled-components";
import { fetchData } from "../../utils/utils";
import React, { useState, useEffect } from "react";

export function NewsFlash() {
  const [newsFlash, setNewsFlash] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchData("http://localhost:3000/api/newsFlash", setNewsFlash);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % newsFlash.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [newsFlash]);

  const rightIndex = (currentIndex + 1) % newsFlash.length;

  return (
    <StyledDiv>
      <div className="newsFlash-content">
        <StyledContent>
          <b>연합뉴스</b>
          <span>{newsFlash[currentIndex]}</span>
        </StyledContent>
        <StyledContent>
          <b>연합뉴스</b>
          <span>{newsFlash[rightIndex]}</span>
        </StyledContent>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  .newsFlash-content {
    display: flex;
    justify-content: space-between;
  }
`;

const rollAnimation = keyframes`
  0% { transform: translateY(50px); }
  20%, 80% { transform: translateY(0px); }
  100% { transform: translateY(-50px); }
`;

const StyledContent = styled.div`
  display: flex;
  align-items: center;
  width: 49%;
  height: 70px;
  background-color: #ececec;
  overflow: hidden;
  text-overflow: ellipsis; /* 말줄임*/

  b {
    padding: 10px;
  }

  span {
    animation: ${rollAnimation} 5s infinite; /* 롤링 애니메이션 적용 */
    font-size: 16px;
    margin-left: 10px;
    color: #666;
    white-space: nowrap;
  }
`;
