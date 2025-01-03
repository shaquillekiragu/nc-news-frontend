import { useState, useEffect } from "react";
import { getComments } from "../../api";
import CommentCard from "../CommentCard/CommentCard";
import PostComment from "../PostComment/PostComment";
import Loading from "../Loading/Loading";
import "./CommentsList.css";

function CommentsList({ article_id }) {
  const [commentsList, setCommentsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await getComments(article_id);
        setCommentsList(response.data.comments);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    }
    fetchComments();
  }, [commentsList]);

  if (isLoading) {
    return <Loading page={"Comments"} />;
  }
  return (
    <>
      <p>
        Comments: <strong>{commentsList.length}</strong>
      </p>
      <h2>Comments:</h2>
      <PostComment article_id={article_id} />
      <ul>
        {commentsList.map((comment) => {
          return (
            <li key={comment.comment_id}>
              {<CommentCard comment={comment} article_id={article_id} />}
            </li>
          );
        })}
      </ul>
      <br />
    </>
  );
}

export default CommentsList;
