import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import Articles from "./components/Articles";
import ViewArticle from "./components/ViewArticle";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ViewArticle />} />
          <Route path="/articles/:id/comments" element={<ViewArticle />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
