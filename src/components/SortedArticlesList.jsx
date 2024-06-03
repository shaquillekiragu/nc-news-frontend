import ArticleCard from "./ArticleCard";

function SortedArticlesList({ articlesList }) {
  const sortedArticlesList = articlesLIst.sort((article) => {
    // Whatever
  });

  return (
    <ul>
      {sortedArticlesList.map((article) => {
        return (
          <li key={article.article_id}>{<ArticleCard article={article} />}</li>
        );
      })}
    </ul>
  );
}

export default SortedArticlesList;
