import ArticleCard from "./ArticleCard";

function ArticlesList() {
  return (
    <ul>
      {articlesList.map((article) => {
        return (
          <li key={article.article_id}>{<ArticleCard article={article} />}</li>
        );
      })}
    </ul>
  );
}

export default ArticlesList;
