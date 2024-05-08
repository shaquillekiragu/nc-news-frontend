function CommentCard({ comment }) {
  return (
    <section>
      <li>Commenter: {comment.author}</li>
      <li>{`${comment.body.slice(0, 100)}...`}</li>
      <li>Created: {comment.created_at}</li>
      <li>Votes: {comment.votes}</li>
      <br />
    </section>
  );
}

export default CommentCard;
