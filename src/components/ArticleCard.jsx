function ArticleCard({ article }) {
  return (
    <section>
      <h3>{article.title}</h3>
      <p>Written by: {article.author}</p>
      <p>Topic: {article.topic}</p>
      <img src={article.article_img_url} alt="Article thumbnail" />
      <p>Comments: {article.comment_count}</p>
      <p>Upvotes: {article.votes}</p>
      <p>Created: {article.created_at}</p>
    </section>
  );
}

export default ArticleCard;
