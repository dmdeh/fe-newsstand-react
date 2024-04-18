import { Header } from "./js/Header";
import { PressHeader } from "./js/PressHeader";
import { PressContents } from "./js/PressContents";
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
      <div className="press">
        <PressHeader/>
        <PressContents />
      </div>
    </div>
  );
}

export default App;
