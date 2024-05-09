import axios from "axios";

function getArticles() {
  return axios.get("https://news-webpage-project.onrender.com/api/articles");
}

export function getArticle(id) {
  return axios.get(
    `https://news-webpage-project.onrender.com/api/articles/${id}`
  );
}

export function patchDownvote(id, inc_votes) {
  return axios
    .patch(`https://news-webpage-project.onrender.com/api/articles/${id}`, {
      inc_votes: inc_votes,
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getCommentsByArticleId(id) {
  return axios.get(
    `https://news-webpage-project.onrender.com/api/articles/${id}/comments`
  );
}

export default getArticles;
