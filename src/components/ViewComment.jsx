import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getComment } from "../api";
import Loading from "./Loading";
import DeleteComment from "./DeleteComment";

function ViewComment({ article_id }) {
  const { comment_id } = useParams();
  console.log(comment_id, "comment_id");

  const [comment, setComment] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const username = "cooljmessy";

  useEffect(() => {
    getComment(article_id, comment_id)
      .then((response) => {
        console.log(response, "response");
        setComment(response.data.comment);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        // Will properly error handle on a future ticket
      });
  }, []);

  if (isLoading) {
    return <Loading page={"Comment"} />;
  }
  return (
    <>
      <h2>Comment</h2>
      <p>Commenter: {comment.author}</p>
      <p>
        <b>{comment.body}</b>
      </p>
      <p>Created at: {comment.created_at}</p>
      <p>Votes: {comment.votes}</p>
      <br />
      <DeleteComment comment_id={comment_id} />
    </>
  );
}

export default ViewComment;
