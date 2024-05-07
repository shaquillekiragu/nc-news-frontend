import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import WelcomePage from "./components/WelcomePage";
import Articles from "./components/Articles";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/articles" element={<Articles />} />
        {/* <Route path="/viewArticle" element={<ArticleCard />} />
      <Route path="/updateArticle" element={<PatchArticle />} />
      <Route path="/articles?topic=" element={<ArticlesByTopic />} />
      <Route path="/viewArticle/comments" element={<Comments />} />
      <Route path="/viewArticle/comments/viewComment" element={<Comments />} />
      <Route
        path="/viewArticle/comments/writeComment"
        element={<PostComment />}
      />
      <Route
        path="/viewArticle/comments/deleteComment"
        element={<DeleteComment />}
      />
      <Route path="/users" element={<Users />} /> */}
        {/* <Route path="/users?username=" element={<UserCard/>}/> */}
      </Routes>
    </>
  );
}

export default App;
