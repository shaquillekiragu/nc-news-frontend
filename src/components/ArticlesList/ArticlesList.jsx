import ArticleCard from "../ArticleCard/ArticleCard";
import "./ArticlesList.css";

function ArticlesList({ articlesList, sortQuery }) {
  let sortedArticlesList = [...articlesList];

  if (sortQuery) {
    let sortOrder = -1;
    if (sortQuery.startsWith("+")) {
      sortOrder = 1;
    } else if (sortQuery.startsWith("-")) {
      sortOrder = -1;
    }

    const sortTarget =
      sortQuery.startsWith("+") || sortQuery.startsWith("-")
        ? sortQuery.slice(1)
        : sortQuery;

    sortedArticlesList.sort((articleA, articleB) => {
      if (
        (sortTarget === "created_at" || sortTarget === "title") &&
        articleA[sortTarget] < articleB[sortTarget]
      ) {
        return -1 * sortOrder;
      } else if (
        (sortTarget === "created_at" || sortTarget === "title") &&
        articleA[sortTarget] > articleB[sortTarget]
      ) {
        return 1 * sortOrder;
      } else if (
        (sortTarget === "votes" || sortTarget === "comment_count") &&
        Number(articleA[sortTarget]) > Number(articleB[sortTarget])
      ) {
        return -1 * sortOrder;
      } else if (
        (sortTarget === "votes" || sortTarget === "comment_count") &&
        Number(articleA[sortTarget]) < Number(articleB[sortTarget])
      ) {
        return 1 * sortOrder;
      } else {
        return 0;
      }
    });
  }

  return (
    <ul className="gridContainer">
      {sortedArticlesList.map((article, index) => {
        return (
          <li key={article.article_id}>
            {<ArticleCard article={article} index={index} />}
          </li>
        );
      })}
    </ul>
  );
}

export default ArticlesList;
