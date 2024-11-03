import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "../ArticleCard/ArticleCard";
import Loading from "../Loading/Loading";
import getArticles from "../../api";
import "./SimilarArticles.css";

function SimiliarArticles({ articleTopic }) {
  const [similarArticlesList, setSimilarArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { article_id } = useParams();
  const selectedArticleId = article_id;

  useEffect(() => {
    async function fetchSimilarArticles() {
      try {
        const response = await getArticles(
          `https://news-webpage-project.onrender.com/api/articles?topic=${articleTopic}`
        );
        setSimilarArticlesList(response.data.articles);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    }
    fetchSimilarArticles();
  }, [selectedArticleId]);

  const filteredList = similarArticlesList.filter((article) => {
    return Number(article.article_id) !== Number(selectedArticleId);
  });

  const displayedSimilarArticlesList = filteredList.slice(0, 5);

  if (isLoading) {
    return (
      <div className="thinRedBanner">
        <Loading page={"Panel of similar articles"} />
      </div>
    );
  }
  return (
    <div className="similarArticlesContainer">
      <h3>Similar articles:</h3>
      <ul className="similarArticlesList">
        {displayedSimilarArticlesList.map((article) => {
          return (
            <li key={article.article_id}>
              {<ArticleCard article={article} />}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SimiliarArticles;
