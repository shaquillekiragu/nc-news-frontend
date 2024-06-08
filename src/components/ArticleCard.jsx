import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  const pathId = article.article_id;
  const path = `/articles/${pathId}`;
  return (
    <section>
      <h3>{article.title}</h3>
      <p>Written by: {article.author}</p>
      <p>Topic: {article.topic}</p>
      <Link to={path}>Read full article</Link>
      <br />
      <img src={article.article_img_url} alt="Article thumbnail" />
      <p>Votes: {article.votes}</p>
      <p>Created at: {article.created_at}</p>
      <p>Comments: {article.comment_count}</p>
      <br />
    </section>
  );
}

export default ArticleCard;
