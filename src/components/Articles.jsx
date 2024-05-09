import { useState, useEffect } from "react";
import getArticles from "../api";
import ArticleCard from "./ArticleCard";

function Articles() {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles()
      .then((response) => {
        setArticlesList(response.data.articles);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return <p>Articles loading...</p>;
  }
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
