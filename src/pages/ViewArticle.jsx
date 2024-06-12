import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticle } from "../api";
import PatchArticleVotes from "../components/PatchArticlesVotes";
import Comments from "../components/Comments";
import Loading from "../components/Loading";

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
        console.log(err);
      }
    }
    fetchArticleView();
  }, []);

  if (isLoading) {
    return <Loading page={"Article"} />;
  }
  return (
    <>
      <h2>Article</h2>
      <h3>{article.title}</h3>
      <p>
        Written by: <b>{article.author}</b>
      </p>
      <p>
        Topic: <b>{article.topic}</b>
      </p>
      <img src={article.article_img_url} alt="Article thumbnail" />
      <p>{article.body}</p>
      <p>
        Votes: <b>{voteCount}</b>
      </p>
      <PatchArticleVotes
        setVoteCount={setVoteCount}
        article={article}
        article_id={article_id}
      />
      <p>
        Created at: <b>{article.created_at}</b>
      </p>
      <Comments article_id={article_id} />
    </>
  );
}

export default ViewArticle;
