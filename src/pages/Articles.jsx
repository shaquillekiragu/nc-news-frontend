import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import getArticles from "../api";
import FilterByTopic from "../components/FilterByTopic";
import SortArticles from "../components/SortArticles";
import ArticlesList from "../components/ArticlesList";
import Loading from "../components/Loading";

function Articles() {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [topicParams, setTopicParams] = useSearchParams();
  let topicQuery = topicParams.get("topic");

  function handleTopicChange(event) {
    const newTopicParams = new URLSearchParams(topicParams);
    newTopicParams.set("topic", event.target.value);
    setTopicParams(newTopicParams);
    topicQuery = newTopicParams.get("topic");
  }

  const [sortParams, setSortParams] = useSearchParams();
  let sortQuery = sortParams.get("sort");

  function handleSortChange(event) {
    const newSortParams = new URLSearchParams(sortParams);
    newSortParams.set("sort", event.target.value);
    setSortParams(newSortParams);
    sortQuery = newSortParams.get("sort");
  }

  useEffect(() => {
    async function fetchArticles() {
      try {
        let urlStr = "https://news-webpage-project.onrender.com/api/articles";
        if (topicQuery && sortQuery) {
          urlStr += `?topic=${topicQuery}&sort=${sortQuery}`;
        } else if (topicQuery) {
          urlStr += `?topic=${topicQuery}`;
        } else if (sortQuery) {
          urlStr += `?sort=${sortQuery}`;
        }
        const response = await getArticles(urlStr);
        setArticlesList(response.data.articles);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    }
    fetchArticles();
  }, [topicQuery, sortQuery]);

  if (isLoading) {
    return <Loading page={"Articles"} />;
  }
  return (
    <>
      <h2>Articles</h2>
      <FilterByTopic handleTopicChange={handleTopicChange} />
      <br />
      <SortArticles handleSortChange={handleSortChange} />
      <ul>
        <ArticlesList articlesList={articlesList} sortQuery={sortQuery} />
      </ul>
    </>
  );
}

export default Articles;
