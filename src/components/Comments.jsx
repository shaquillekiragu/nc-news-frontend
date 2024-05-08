import { useState, useEffect } from "react";
import { getCommentsByArticleId } from "../api";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";

function Comments() {
  const { id } = useParams();
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    getCommentsByArticleId(id)
      .then((data) => {
        setCommentsList(data.comments);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h2>Comments</h2>
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
