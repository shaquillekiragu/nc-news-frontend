import { useState } from "react";
import { deleteComment } from "../../api";
import "./DeleteComment.css";

function DeleteComment({ comment }) {
  const [isDeleted, setIsDeleted] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    deleteComment(comment.comment_id);
    setIsDeleted(true);
  }

  if (!isDeleted) {
    return <button onClick={handleClick}>Delete comment</button>;
  }
  return <p>{"Comment deleted."}</p>;
}

export default DeleteComment;
