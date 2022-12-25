import styled from "styled-components";
import Home from "./pages/Home";
import CountdownTimer from "./countdown/CountdownTimer";
import "./style.css";

const CenterContainer = styled.div`
  text-align: center;
`;

function App() {
  const NOW_IN_MS = new Date("January 1, 2023 00:00:00:000");

  return (
    <CenterContainer>
      <div className="sm:block hidden">Please use narrow device</div>
      <div className="sm:hidden block">
        <CountdownTimer targetDate={NOW_IN_MS} />
        <Home />
      </div>
    </CenterContainer>
  );
}

export default App;
