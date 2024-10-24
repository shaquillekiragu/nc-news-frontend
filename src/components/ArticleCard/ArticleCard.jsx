import { Link } from "react-router-dom";
import "./ArticleCard.css";

function ArticleCard({ article, index }) {
  const pathId = article.article_id;
  const path = `/articles/${pathId}`;

  let viewportWidth = window.innerWidth;

  window.addEventListener("resize", function () {
    viewportWidth = window.innerWidth;
  });

  const formattedCreatedAt = new Date(article.created_at).toLocaleString();

  if (index === 0) {
    return (
      <Link to={path}>
        <section className="articleCard topArticleCard">
          <div className="layerOne">
            <p className="author">Author: {article.author}</p>
            <p className="topic" id="topicTag">
              {article.topic}
            </p>
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
                : `${article.body.slice(0, 501)}...`}
            </p>
          </div>
          <div className="layerFour">
            <p className="createdAt">{formattedCreatedAt}</p>
            <p className="votes">Upvotes: {article.votes}</p>
          </div>
          <div className="layerFive">
            <p className="commentCount">Comments: {article.comment_count}</p>
          </div>
        </section>
      </Link>
    );
  } else if (viewportWidth > 1280 && index === 1) {
    return (
      <>
        <Link to={path}>
          <section className="articleCard secondArticleCard">
            <div className="layerOne">
              <p className="author">Author: {article.author}</p>
              <p className="topic" id="topicTag">
                {article.topic}
              </p>
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
            </div>
            <div className="layerFive">
              <p className="commentCount">Comments: {article.comment_count}</p>
            </div>
          </section>
        </Link>
        <br />
        <br />
      </>
    );
  } else {
    return (
      <>
        <Link className="articleCardLink" to={path}>
          <section className="articleCard otherArticleCards">
            <div className="layerOne">
              <p className="author">Author: {article.author}</p>
              <p className="topic" id="topicTag">
                {article.topic}
              </p>
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
        <br />
        <br />
      </>
    );
  }
}

export default ArticleCard;
