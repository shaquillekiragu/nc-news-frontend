import { Link } from "react-router-dom";

function CommentCard({ comment, article_id }) {
  const id = comment.comment_id;
  const path = `/articles/${article_id}/comments/${id}`;

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
      <Link to={path}>ViewComment</Link>
      <br />
    </section>
  );
}

export default CommentCard;
