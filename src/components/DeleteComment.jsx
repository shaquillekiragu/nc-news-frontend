import { useState } from "react";
import { deleteComment } from "../api";

function DeleteComment({ comment }) {
  const [isDeleted, setIsDeleted] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    deleteComment(comment.comment_id);
    setIsDeleted(true);
  }

  if (!isDeleted) {
    return (
      <>
        <form action="">
          <button onClick={handleClick}>Delete comment</button>
        </form>
      </>
    );
  }
  return <p>{"Comment deleted."}</p>;
}

export default DeleteComment;
