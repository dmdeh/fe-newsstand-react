import { Header } from "./js/Header/Header";
import { PressHeader } from "./js/Press/PressHeader";
import { PressContents } from "./js/Press/Contents/PressContents";
import { Rollingnews } from "./js/Rollingnews/Rollingnews";
import "./App.css";

function App() {
  return (
    <div className="wrap">
      <Header />
      <Rollingnews />
      <div className="press">
        <PressHeader />
        <PressContents />
      </div>
    </div>
  );
}

export default App;
