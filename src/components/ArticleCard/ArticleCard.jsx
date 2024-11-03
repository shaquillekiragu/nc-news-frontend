import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ArticleCard.css";

function ArticleCard({ article, index }) {
  const pathId = article.article_id;
  const path = `/articles/${pathId}`;

  const [viewportWidth, setViewportWidth] = useState(null);

  useEffect(() => {
    window.addEventListener("resize", function () {
      setViewportWidth(window.innerWidth);
    });
  }, [window.innerWidth]);

  const formattedCreatedAt = new Date(article.created_at).toLocaleDateString();

  if (index === 0) {
    return (
      <Link className="articleCardLink" to={path}>
        <section className="articleCard topArticleCard">
          <h3 className="topArticleLabel">TOP ARTICLE</h3>
          <div className="layerOne">
            <p className="author">{article.author}</p>
            <p className="topic">{article.topic}</p>
          </div>
          <div className="layerTwo">
            <h3 className="title">{article.title}</h3>
          </div>
          <div className="layerThree">
            <img
              className="thumbnail"
              src={article.article_img_url}
              alt="Article thumbnail"
            />
            <p className="body">
              {article.body.length <= 500
                ? article.body
                : `${article.body.slice(0, 251)}...`}
            </p>
          </div>
          <div className="layerFour">
            <p className="votes">Upvotes: {article.votes}</p>
          </div>
          <div className="layerFive">
            <p className="createdAt">{formattedCreatedAt}</p>
            <p className="commentCount">Comments: {article.comment_count}</p>
          </div>
        </section>
      </Link>
    );
  } else if (viewportWidth > 850) {
    return (
      <Link className="articleCardLink" to={path}>
        <section className="articleCard">
          <div className="layerOne">
            <p className="author">{article.author}</p>
            <p className="topic">{article.topic}</p>
          </div>
          <div className="layerTwo">
            <h3 className="title">{article.title}</h3>
          </div>
          <div className="layerThree">
            <img
              className="thumbnail"
              src={article.article_img_url}
              alt="Article thumbnail"
            />
          </div>
          <div className="layerFour">
            <p className="createdAt">{formattedCreatedAt}</p>
            <p className="votes">Upvotes: {article.votes}</p>
            <p className="commentCount">Comments: {article.comment_count}</p>
          </div>
        </section>
      </Link>
    );
  } else {
    return (
      <Link className="articleCardLink" to={path}>
        <section className="articleCard">
          <div className="layerOne">
            <p className="author">{article.author}</p>
            <p className="topic">{article.topic}</p>
          </div>
          <div className="layerTwo">
            <h3 className="title">{article.title}</h3>
          </div>
          <div className="layerThree">
            <img
              className="thumbnail"
              src={article.article_img_url}
              alt="Article thumbnail"
            />
          </div>
          <div className="layerFour">
            <p className="votes">Upvotes: {article.votes}</p>
          </div>
          <div className="layerFive">
            <p className="createdAt">{formattedCreatedAt}</p>
            <p className="commentCount">Comments: {article.comment_count}</p>
          </div>
        </section>
      </Link>
    );
  }
}

export default ArticleCard;
