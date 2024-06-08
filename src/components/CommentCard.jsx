import { useState } from "react";
import { patchCommentVoteCount } from "../api";
import DeleteComment from "./DeleteComment";

function CommentCard({ comment }) {
  const [commentVoteCount, setCommentVoteCount] = useState(0);
  const username = "cooljmessy";

  function handleCommentUpvoteClick(event) {
    event.preventDefault();
    let inc_votes = 0;
    setCommentVoteCount((currentCommentVoteCount) => {
      if (currentCommentVoteCount !== comment.votes + 1) {
        ++inc_votes;
        return currentCommentVoteCount + 1;
      }
      return currentCommentVoteCount;
    });
    patchCommentVoteCount(comment.comment_id, inc_votes).catch((err) => {
      console.log(err);
    });
  }

  function handleCommentDownvoteClick(event) {
    event.preventDefault();
    let inc_votes = 0;
    setCommentVoteCount((currentCommentVoteCount) => {
      if (currentCommentVoteCount !== comment.votes - 1) {
        --inc_votes;
        return currentCommentVoteCount - 1;
      }
      return currentCommentVoteCount;
    });
    patchCommentVoteCount(comment.comment_id, inc_votes).catch((err) => {
      console.log(err);
    });
  }

  if (username === comment.author) {
    return (
      <section>
        <br />
        <li>Commenter: {comment.author}</li>
        <li>
          <b>
            {comment.body.length < 100
              ? comment.body
              : `${comment.body.slice(0, 100)}...`}
          </b>
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
          <b>
            {comment.body.length < 100
              ? comment.body
              : `${comment.body.slice(0, 100)}...`}
          </b>
        </li>
        <li>Created at: {comment.created_at}</li>
        <li>Votes: {commentVoteCount}</li>
        <form action="">
          <button onClick={handleCommentUpvoteClick}>Upvote</button>
          <button onClick={handleCommentDownvoteClick}>Downvote</button>
        </form>
        <br />
      </section>
    );
  }
}

export default CommentCard;
