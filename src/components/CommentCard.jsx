function CommentCard({ comment }) {
  return (
    <section>
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

export default CommentCard;
