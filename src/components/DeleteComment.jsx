import { useState, useEffect } from "react";
import { deleteComment } from "../api";

function DeleteComment({ comment }) {
  const [isDeleted, setIsDeleted] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    if (!isDeleted) {
      console.log(comment.comment_id, "comment_id");
      deleteComment(comment.comment_id);
      setIsDeleted(true);
    }
  }

  return (
    <form action="">
      <button onClick={handleClick}>Delete comment</button>
    </form>
  );
}

export default DeleteComment;
