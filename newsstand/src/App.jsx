// import { useState } from "react";
import { CustomDate } from "./js/Date";
import "./App.css";

function App() {
  return (
    <div className="wrap">
      <div className="header">
        <div className="title">
          <button className="refresh-btn" onClick={() => location.reload}>
            <img src="./public/img/refresh.png" />
          </button>
          <h1>뉴스스탠드</h1>
        </div>
        <CustomDate />
      </div>
      <div className="rollingnews">
        <div className="rollingnews-contents">
          <div className="rollingnews-left"></div>
          <div className="rollingnews-right"></div>
        </div>
      </div>
      <div className="presscompany">
        <div className="presscompany-header">
          <div className="presscompany-title">
            <span>전체 언론사</span>
            <span>내가 구독한 언론사</span>
          </div>
          <div className="view-btn">
            <button className="list-view-btn">
              <img src="./public/img/list_off.png" />
            </button>
            <button className="grid-view-btn">
              <img src="./public/img/grid_off.png" />
            </button>
          </div>
        </div>
        <div className="presscompany-contents"></div>
      </div>
    </div>
  );
}

export default App;
