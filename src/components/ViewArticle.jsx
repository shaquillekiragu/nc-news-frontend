import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import getArticles from "../api";
import { getArticle } from "../api";

function ViewArticle() {
  const { id } = useParams();
  console.log(id, "id");
  const [article, setArticle] = useState([]);

  if (id === undefined) {
    console.log("Invalid article id");
  }

  useEffect(() => {
    getArticle(id)
      .then((data) => {
        setArticle(data.article);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(article, "article");

  return (
    <>
      <h3>{article.title}</h3>
      <p>Written by: {article.author}</p>
      <p>Topic: {article.topic}</p>
      <img src={article.article_img_url} alt="Article thumbnail" />
      <p>{article.body}</p>
      <p>Votes: {article.votes}</p>
      <form action="">
        <button>Upvote</button>
        <button>Downvote</button>
      </form>
      <p>Created: {article.created_at}</p>
      <p>Comments: {article.comment_count}</p>
    </>
  );
}

export default ViewArticle;
