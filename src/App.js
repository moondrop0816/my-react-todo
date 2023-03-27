import GlobalStyle from "./style/GlobalStyle";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import TodoContainer from "./pages/TodoContainer";
import Statistics from "./pages/Statistics";
import MakerInfo from "./pages/MakerInfo";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
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
      </div>
    </>
  );
}

export default App;
