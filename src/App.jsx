import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import Articles from "./components/Articles";
import ViewArticle from "./components/ViewArticle";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<ViewArticle />} />
        <Route
          path="/articles/:article_id/comments"
          element={<ViewArticle />}
        />
      </Routes>
    </>
  );
}

export default App;
