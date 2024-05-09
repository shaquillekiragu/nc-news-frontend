import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticle, patchDownvote } from "../api";
import Comments from "./Comments";

function ViewArticle() {
  const { id } = useParams();
  const [article, setArticle] = useState([]);
  const [voteCount, setVoteCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  if (id === undefined) {
    console.log("Invalid article id");
  }

  useEffect(() => {
    getArticle(id)
      .then((response) => {
        setArticle(response.data.article);
        setVoteCount(response.data.article.votes);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleUpvoteClick(event) {
    event.preventDefault();
    let inc_votes = 0;
    setVoteCount((currentVoteCount) => {
      if (currentVoteCount !== article.votes + 1) {
        ++inc_votes;
        return currentVoteCount + 1;
      }
      return currentVoteCount;
    });
    patchDownvote(id, inc_votes);
  }
  function handleDownvoteClick(event) {
    event.preventDefault();
    let inc_votes = 0;
    setVoteCount((currentVoteCount) => {
      if (currentVoteCount !== article.votes - 1) {
        --inc_votes;
        return currentVoteCount - 1;
      }
      return currentVoteCount;
    });
    patchDownvote(id, inc_votes);
  }

  if (isLoading) {
    return <p>Article loading...</p>;
  }
  return (
    <>
      <h2>Article</h2>
      <h3>{article.title}</h3>
      <p>Written by: {article.author}</p>
      <p>Topic: {article.topic}</p>
      <img src={article.article_img_url} alt="Article thumbnail" />
      <p>{article.body}</p>
      <p>Votes: {voteCount}</p>
      <form action="">
        <button onClick={handleUpvoteClick}>Upvote</button>
        <button onClick={handleDownvoteClick}>Downvote</button>
      </form>
      <p>Created: {article.created_at}</p>
      <p>Comments: {article.comment_count}</p>
      <br />
      <Comments id={id} />
    </>
  );
}

export default ViewArticle;
