import { useState } from "react";
import { useAuth } from "../../contexts/UserContext";
import DeleteComment from "../DeleteComment/DeleteComment";
import PatchCommentVotes from "../PatchCommentVotes/PatchCommentVotes";
import "./CommentCard.css";

function CommentCard({ comment, article_id }) {
  const [commentVoteCount, setCommentVoteCount] = useState(0);
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

  if (authUser.username === comment.author) {
    return (
      <section>
        <br />
        <li>Commenter: {comment.author}</li>
        <li>
          <strong>
            {comment.body.length < 100
              ? comment.body
              : `${comment.body.slice(0, 100)}...`}
          </strong>
        </li>
        <li>Created at: {comment.created_at}</li>
        <li>Votes: {comment.votes}</li>
        <DeleteComment comment={comment} />
        <br />
      </section>
    );
  } else {
    return (
      <section>
        <br />
        <li>Commenter: {comment.author}</li>
        <li>
          <strong>
            {comment.body.length < 100
              ? comment.body
              : `${comment.body.slice(0, 100)}...`}
          </strong>
        </li>
        <li>Created at: {comment.created_at}</li>
        <li>Votes: {commentVoteCount}</li>
        <PatchCommentVotes
          comment={comment}
          article_id={article_id}
          setCommentVoteCount={setCommentVoteCount}
        />
        <br />
      </section>
    );
  }
}

export default CommentCard;
