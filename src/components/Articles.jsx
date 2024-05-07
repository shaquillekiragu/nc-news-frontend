import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

function Articles() {
  const [articlesList, setArticlesList] = useState([]);

  useEffect(() => {
    fetch("https://news-webpage-project.onrender.com/api/articles")
      .then((response) => {
        if (!response.ok) {
          return Promise.reject({
            status: response.status,
            message: response.statusText,
          });
        }
        return response.json();
      })
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
