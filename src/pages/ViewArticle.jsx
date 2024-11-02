import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../api";
import PatchArticleVotes from "../components/PatchArticleVotes/PatchArticleVotes";
import Comments from "../components/CommentsList/CommentsList";
import SimilarArticles from "../components/SimilarArticles/SimilarArticles";
import Loading from "../components/Loading/Loading";
import "../stylesheets/ViewArticle.css";

function ViewArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [voteCount, setVoteCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  if (article_id === undefined) {
    console.log("Invalid article id");
  }

  useEffect(() => {
    async function fetchArticleView() {
      try {
        const response = await getArticle(article_id);
        setArticle(response.data.article);
        setVoteCount(response.data.article.votes);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    }
    fetchArticleView();
  }, []);

  if (isLoading) {
    return (
      <div className="thinRedBanner">
        <Loading page={"Article"} />
      </div>
    );
  }
  return (
    <div className="articleGridContainer">
      <article>
        <div className="thinRedBanner"></div>
        <h2>Article</h2>
        <h3>{article.title}</h3>
        <p>
          Written by: <strong>{article.author}</strong>
        </p>
        <p>
          Topic: <strong>{article.topic}</strong>
        </p>
        <img src={article.article_img_url} alt="Article thumbnail" />
        <p>{article.body}</p>
        <p>
          Votes: <strong>{voteCount}</strong>
        </p>
        <PatchArticleVotes
          setVoteCount={setVoteCount}
          article={article}
          article_id={article_id}
        />
        <p>
          Created at: <strong>{article.created_at}</strong>
        </p>
        <Comments article_id={article_id} />
      </article>
      <SimilarArticles
        articleTopic={article.topic}
        selectedArticleId={article_id}
      />
    </div>
  );
}

export default ViewArticle;
