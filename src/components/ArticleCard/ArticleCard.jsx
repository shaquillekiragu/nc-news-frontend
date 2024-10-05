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
      <>
        <Link to={path}>
          <section className="topArticleCard">
            <div className="layerOne">
              <p className="item author">Author: {article.author}</p>
              <p className="item topic" id="topicTag">
                {article.topic}
              </p>
            </div>
            <div className="layerTwo">
              <h3 className="item title">{article.title}</h3>
            </div>
            <div className="layerThree">
              <img
                className="item thumbnail"
                src={article.article_img_url}
                alt="Article thumbnail"
              />
              <p className="item body">
                {article.body.length <= 500
                  ? article.body
                  : `${article.body.slice(0, 501)}...`}
              </p>
            </div>
            <div className="layerFour">
              <p className="item createdAt">{formattedCreatedAt}</p>
              <p className="item votes">Upvotes: {article.votes}</p>
            </div>
            <div className="layerFive">
              <p className="item commentCount">
                Comments: {article.comment_count}
              </p>
            </div>
          </section>
        </Link>
        <br />
      </>
    );
  } else if (viewportWidth >= 1024 && index === 1) {
    return (
      <>
        <Link to={path}>
          <section className="secondArticleCard">
            <div className="layerOne">
              <p className="item author">Author: {article.author}</p>
              <p className="item topic" id="topicTag">
                {article.topic}
              </p>
            </div>
            <div className="layerTwo">
              <h3 className="item title">{article.title}</h3>
            </div>
            <div className="layerThree">
              <img
                className="item thumbnail"
                src={article.article_img_url}
                alt="Article thumbnail"
              />
            </div>
            <div className="layerFour">
              <p className="item createdAt">{formattedCreatedAt}</p>
              <p className="item votes">Upvotes: {article.votes}</p>
            </div>
            <div className="layerFive">
              <p className="item commentCount">
                Comments: {article.comment_count}
              </p>
            </div>
          </section>
        </Link>
        <br />
      </>
    );
  } else {
    return (
      <>
        <Link to={path}>
          <section className="articleCard">
            <div className="layerOne">
              <p className="item author">Author: {article.author}</p>
              <p className="item topic" id="topicTag">
                {article.topic}
              </p>
            </div>
            <div className="layerTwo">
              <h3 className="item title">{article.title}</h3>
            </div>
            <div className="layerThree">
              <img
                className="item thumbnail"
                src={article.article_img_url}
                alt="Article thumbnail"
              />
            </div>
            <div className="layerFour">
              <p className="item createdAt">{formattedCreatedAt}</p>
              <p className="item votes">Upvotes: {article.votes}</p>
              <p className="item commentCount">
                Comments: {article.comment_count}
              </p>
            </div>
          </section>
        </Link>
        <br />
      </>
    );
  }
}

export default ArticleCard;
