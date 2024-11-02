import UserProvider from "./contexts/UserContext.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import IndexPage from "./pages/IndexPage.jsx";
import Home from "./pages/Home.jsx";
import LoginAction from "./pages/LoginAction.jsx";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage.jsx";
import ViewArticle from "./pages/ViewArticle";
import UserProfile from "./pages/UserProfile";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/articles" element={<Home />} />
          <Route path="/login_action" element={<LoginAction />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/articles/:article_id" element={<ViewArticle />} />
          <Route
            path="/articles/:article_id/comments"
            element={<ViewArticle />}
          />
          <Route path="/users/:user_id" element={<UserProfile />} />
        </Routes>
        <Footer />
      </UserProvider>
    </>
  );
}

export default App;
