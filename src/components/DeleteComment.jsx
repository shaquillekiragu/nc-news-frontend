import { useState, useEffect } from "react";
import { deleteComment } from "../api";

function DeleteComment({ comment_id }) {
  const [buttonVisibility, setButtonVisibility] = useState("hidden");

  useEffect(() => {
    document.getElementById("delete-button").visibility = buttonVisibility;
    if (username === comment.author) {
      setButtonVisibility("visible");
    }
  }, []);

  function handleClick(event) {
    event.preventDefault();
    deleteComment(comment_id);
  }

  return (
    <div id="delete-button">
      <form action="">
        <button onClick={handleClick}>Delete comment</button>
      </form>
    </div>
  );
}

export default DeleteComment;
