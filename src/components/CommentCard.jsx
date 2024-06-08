import DeleteComment from "./DeleteComment";

function CommentCard({ comment }) {
  const username = "cooljmessy";

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
        <li>Votes: {comment.votes}</li>
        <br />
      </section>
    );
  }
}

export default CommentCard;
