import GlobalStyle from "./style/GlobalStyle";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import TodoContainer from "./pages/TodoContainer";
import Statistics from "./pages/Statistics";
import MakerInfo from "./pages/MakerInfo";
import styled from "styled-components";

const StyledApp = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  .wrapper {
    width: 90%;
    background: var(--white);
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp className="App">
        <Header />
        <section className="wrapper">
          <Routes>
            <Route
              path="/"
              element={<TodoContainer />}
            />
            <Route
              path="/statistics"
              element={<Statistics />}
            />
            <Route
              path="/makerinfo"
              element={<MakerInfo />}
            />
          </Routes>
        </section>
      </StyledApp>
    </>
  );
}

export default App;
