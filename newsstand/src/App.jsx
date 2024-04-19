import styled from "styled-components";
import { Header } from "./js/Header/Header";
import { Press } from "./js/Press/PressHeader";
import { Rollingnews } from "./js/Rollingnews/Rollingnews";

function App() {
  return (
    <Wrap>
      <Header />
      <Rollingnews />
      <Press />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
`;

export default App;
