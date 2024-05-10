import axios from "axios";

function getArticles() {
  return axios.get("https://news-webpage-project.onrender.com/api/articles");
}

export function getArticle(article_id) {
  return axios.get(
    `https://news-webpage-project.onrender.com/api/articles/${article_id}`
  );
}

export function getUsers() {
  return axios.get("https://news-webpage-project.onrender.com/api/users");
}

export function patchVoteCount(article_id, inc_votes) {
  return axios.patch(
    `https://news-webpage-project.onrender.com/api/articles/${article_id}`,
    {
      inc_votes: inc_votes,
    }
  );
}

export function getComments(article_id) {
  return axios.get(
    `https://news-webpage-project.onrender.com/api/articles/${article_id}/comments`
  );
}

export function postComment(article_id, username, postedBody) {
  return axios.post(
    `https://news-webpage-project.onrender.com/api/articles/${article_id}/comments`,
    { username, body: postedBody }
  );
}

export default getArticles;
