import { UsernameProvider } from "./contexts/LoginContext.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import InitialPage from "./pages/InitialPage.jsx";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage.jsx";
import Articles from "./pages/Articles";
import ViewArticle from "./pages/ViewArticle";
import ViewComment from "./pages/ViewComment";

function App() {
  return (
    <>
      <UsernameProvider>
        <Header />
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:article_id" element={<ViewArticle />} />
          <Route
            path="/articles/:article_id/comments"
            element={<ViewArticle />}
          />
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
