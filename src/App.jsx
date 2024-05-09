import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import WelcomePage from "./components/WelcomePage";
import Articles from "./components/Articles";
import ViewArticle from "./components/ViewArticle";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ViewArticle />} />
        <Route path="/articles/:id/comments" element={<ViewArticle />} />
      </Routes>
    </>
  );
}

export default App;
