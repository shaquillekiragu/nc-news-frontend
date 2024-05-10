import axios from "axios";

function getArticles() {
  return axios.get("https://news-webpage-project.onrender.com/api/articles");
}

export function getArticle(id) {
  return axios.get(
    `https://news-webpage-project.onrender.com/api/articles/${id}`
  );
}

export function getUsers() {
  return axios.get("https://news-webpage-project.onrender.com/api/users");
}

export function patchVoteCount(id, inc_votes) {
  return axios.patch(
    `https://news-webpage-project.onrender.com/api/articles/${id}`,
    {
      inc_votes: inc_votes,
    }
  );
}

export function getCommentsByArticleId(id) {
  return axios.get(
    `https://news-webpage-project.onrender.com/api/articles/${id}/comments`
  );
}

// export function postCommentByArticleId(id) {
//   return axios.post(
//     `https://news-webpage-project.onrender.com/api/articles/${id}/comments`
//   );
// }

export default getArticles;
