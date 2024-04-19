import styled from "styled-components";
import { Header } from "./js/Header/Header";
import { Rollingnews } from "./js/Rollingnews/Rollingnews";
import { Press } from "./js/Press/PressHeader";

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
