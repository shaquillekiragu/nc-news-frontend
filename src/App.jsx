import UserProvider from "./contexts/UserContext.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import InitialPage from "./pages/InitialPage.jsx";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage.jsx";
import Articles from "./pages/Articles";
import ViewArticle from "./pages/ViewArticle";

function App() {
  return (
    <>
      <UserProvider>
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
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
