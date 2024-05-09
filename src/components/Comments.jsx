import { useState, useEffect } from "react";
import { getCommentsByArticleId } from "../api";
import CommentCard from "./CommentCard";

function Comments({ id }) {
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    getCommentsByArticleId(id)
      .then((response) => {
        setCommentsList(response.data.comments);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h2>Comments:</h2>
      <ul>
        {commentsList.map((comment) => {
          return (
            <li key={comment.comment_id}>
              {<CommentCard comment={comment} />}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Comments;
