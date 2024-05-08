import { useState, useEffect } from "react";
import getArticles from "../api";
import ArticleCard from "./ArticleCard";

function Articles() {
  const [articlesList, setArticlesList] = useState([]);

  useEffect(() => {
    getArticles()
      .then((data) => {
        setArticlesList(data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h2>Articles</h2>
      <ul>
        {articlesList.map((article) => {
          return (
            <li key={article.article_id}>
              {<ArticleCard article={article} />}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Articles;
