import GlobalStyle from "./style/GlobalStyle";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import TodoContainer from "./pages/TodoContainer";
import Statistics from "./pages/Statistics";
import MakerInfo from "./pages/MakerInfo";
import styled from "styled-components";
import { useSelector } from "react-redux";

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: var(--base);

  .wrapper {
    width: 95%;
    background: var(--white);
    margin-top: 5em;
    padding: 1em;
    border-radius: 1rem;
  }
`;

function App() {
  const { loading, data, error } = useSelector((state) => state.todoData);
  return (
    <>
      <GlobalStyle />
      <StyledApp className="App">
        <Header />
        <section className="wrapper">
          <Routes>
            <Route
              path="/"
              element={<TodoContainer data={data} />}
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
