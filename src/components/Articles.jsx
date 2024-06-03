import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import getArticles from "../api";
import Loading from "./Loading";
import ArticlesList from "./ArticlesList";
import SortedArticlesList from "./SortedArticlesList";

function Articles() {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [topicParams, setTopicParams] = useSearchParams();

  let topicQuery = topicParams.get("topic");
  function handleChange(event) {
    const newParams = new URLSearchParams(topicParams);
    newParams.set("topic", event.target.value);
    setTopicParams(newParams);
    topicQuery = newParams.get("topic");
  }

  useEffect(() => {
    let urlStr = "https://news-webpage-project.onrender.com/api/articles";
    if (topicQuery) {
      urlStr += `?topic=${topicQuery}`;
    }

    getArticles(urlStr)
      .then((response) => {
        setArticlesList(response.data.articles);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [topicQuery]);

  if (isLoading) {
    return <Loading page={"Articles"} />;
  }
  return (
    <>
      <h2>Articles</h2>
      <label htmlFor="topics">Filter articles by topic: </label>
      <select name="topic-options" id="topics" onChange={handleChange}>
        <option value="">All Articles</option>
        <option value="coding">Coding</option>
        <option value="football">Football</option>
        <option value="cooking">Cooking</option>
      </select>
      <ul>
        {!sortQuery ? (
          <ArticlesList />
        ) : (
          <SortedArticlesList articlesList={articlesList} />
        )}
      </ul>
    </>
  );
}

export default Articles;
