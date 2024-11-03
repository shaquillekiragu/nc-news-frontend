import { Routes, Route } from "react-router-dom";
import UserProvider from "./contexts/UserContext.jsx";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import FirstPage from "./pages/FirstPage.jsx";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage.jsx";
import Home from "./pages/Home.jsx";
import ViewArticle from "./pages/ViewArticle";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/articles" element={<Home />} />
          <Route path="/articles/:article_id" element={<ViewArticle />} />
          <Route
            path="/articles/:article_id/comments"
            element={<ViewArticle />}
          />
          <Route path="/users/:user_id" element={<UserProfile />} />
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
