import { UsernameProvider } from "./contexts/LoginContext.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import Articles from "./components/Articles";
import ViewArticle from "./components/ViewArticle";
import ViewComment from "./components/ViewComment";

function App() {
  return (
    <>
      <UsernameProvider>
        <Header />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:article_id" element={<ViewArticle />} />
          <Route
            path="/articles/:article_id/comments"
            element={<ViewArticle />}
          />{" "}
          <Route
            path="/articles/:article_id/comments/:comment_id"
            element={<ViewComment />}
          />
        </Routes>
      </UsernameProvider>
    </>
  );
}

export default App;
