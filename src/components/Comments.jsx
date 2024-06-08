import { useState, useEffect } from "react";
import { getComments } from "../api";
import CommentCard from "./CommentCard";
import PostComment from "./PostComment";
import Loading from "./Loading";

function Comments({ article_id }) {
  const [commentsList, setCommentsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getComments(article_id)
      .then((response) => {
        setCommentsList(response.data.comments);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [commentsList]);

  if (isLoading) {
    return <Loading page={"Comments"} />;
  }
  return (
    <>
      <p>Comments: {commentsList.length}</p>
      <br />
      <h2>Comments:</h2>
      <PostComment article_id={article_id} />
      <ul>
        {commentsList.map((comment) => {
          return (
            <li key={comment.comment_id}>
              {<CommentCard comment={comment} />}
            </li>
          );
        })}
      </ul>
      <br />
    </>
  );
}

export default Comments;
