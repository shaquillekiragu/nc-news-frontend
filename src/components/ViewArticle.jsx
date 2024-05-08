import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticle } from "../api";
import { Link } from "react-router-dom";

function ViewArticle() {
  const [article, setArticle] = useState([]);

  const { id } = useParams();
  const path = `/articles/${id}/comments`;
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

  return (
    <>
      <h3>{article.title}</h3>
      <p>Written by: {article.author}</p>
      <p>Topic: {article.topic}</p>
      <img src={article.article_img_url} alt="Article thumbnail" />
      <p>{article.body}</p>
      <p>Votes: {article.votes}</p>
      <p>Created: {article.created_at}</p>
      <p>Comments: {article.comment_count}</p>
      <Link to={path}>Open comments section</Link>
    </>
  );
}

export default ViewArticle;
