import GlobalStyle from "./style/GlobalStyle";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import TodoContainer from "./pages/TodoContainer";
import Statistics from "./pages/Statistics";
import MakerInfo from "./pages/MakerInfo";
import styled from "styled-components";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "./actions";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme.js";

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: ${({ theme }) => theme.color.base};

  .wrapper {
    width: 95%;
    background: ${({ theme }) => theme.color.white};
    margin-top: 5em;
    padding: 1em;
    border-radius: 1rem;
  }
`;

function App() {
  const { loading, data, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </>
  );
}

export default App;
