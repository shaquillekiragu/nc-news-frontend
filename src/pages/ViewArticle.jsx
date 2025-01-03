import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../api";
import PatchArticleVotes from "../components/PatchArticleVotes/PatchArticleVotes";
import Comments from "../components/CommentsList/CommentsList";
import SimilarArticles from "../components/SimilarArticles/SimilarArticles";
import Loading from "../components/Loading/Loading";
import Footer from "../components/Footer/Footer";
import "../stylesheets/ViewArticle.css";

function ViewArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [voteCount, setVoteCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

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
  }, [article_id]);

  const formattedDate = new Date(article.created_at).toLocaleDateString();
  const formattedTime = new Date(article.created_at).toLocaleTimeString();

  if (isLoading) {
    return (
      <div className="thinRedBanner">
        <Loading page={"Article"} />
      </div>
    );
  }
  return (
    <>
      <div className="articleGridContainer">
        <article>
          <div className="thinRedBanner"></div>
          <h3 className="articleTitle title">{article.title}</h3>
          <img src={article.article_img_url} alt="Article thumbnail" />
          <p>{article.author}</p>
          <p>{article.topic}</p>
          <p>
            {formattedDate} {formattedTime}
          </p>
          <p>
            Votes: <strong>{voteCount}</strong>
          </p>
          <PatchArticleVotes
            setVoteCount={setVoteCount}
            article={article}
            article_id={article_id}
          />
          <p className="articleBody">{article.body}</p>
          <Comments article_id={article_id} />
        </article>
        <SimilarArticles articleTopic={article.topic} />
      </div>
      <Footer />
    </>
  );
}

export default ViewArticle;
