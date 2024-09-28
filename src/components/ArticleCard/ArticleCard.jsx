import { Link } from "react-router-dom";
import "./ArticleCard.css";

function ArticleCard({ article, index }) {
  const pathId = article.article_id;
  const path = `/articles/${pathId}`;

  if (index === 0) {
    return (
      <>
        <Link to={path}>
          <section>
            <p>By: {article.author}</p>
            <p id="topicTag">{article.topic}</p>
            <h3>{article.title}</h3>
            <p>
              {article.body.length <= 500
                ? article.body
                : `${article.body.slice(0, 501)}...`}
            </p>
            <img src={article.article_img_url} alt="Article thumbnail" />
            <p>Created at: {article.created_at}</p>
            <p>Votes: {article.votes}</p>
            <p>Comments: {article.comment_count}</p>
          </section>
        </Link>
        <br />
      </>
    );
  } else {
    return (
      <>
        <Link to={path}>
          <section>
            <p>Written by: {article.author}</p>
            <p>Topic: {article.topic}</p>
            <h3>{article.title}</h3>
            <img src={article.article_img_url} alt="Article thumbnail" />
            <p>Created at: {article.created_at}</p>
            <p>Votes: {article.votes}</p>
            <p>Comments: {article.comment_count}</p>
          </section>
        </Link>
        <br />
      </>
    );
  }
}

export default ArticleCard;
