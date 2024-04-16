import { Presscompany } from "./js/Presscompany";
import { Header } from "./js/header";
// import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./App.css";

function App() {
  return (
    <div className="wrap">
      <Header />
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
        <div className="presscompany-contents">
          {/* <button className="left-btn">
            <LeftOutlined />
          </button>
          <button className="right-btn">
            <RightOutlined />
          </button> */}
          <Presscompany />
        </div>
      </div>
    </div>
  );
}

export default App;
