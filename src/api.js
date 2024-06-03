import axios from "axios";

function getArticles(urlStr) {
  console.log(urlStr, "urlStr");
  return axios.get(urlStr);
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

export function getComment(article_id, comment_id) {
  return axios.get(
    `https://news-webpage-project.onrender.com/api/articles/${article_id}/comments/${comment_id}`
  );
}

export function postComment(article_id, username, postedBody) {
  return axios.post(
    `https://news-webpage-project.onrender.com/api/articles/${article_id}/comments`,
    { username, postedBody }
  );
}

export function deleteComment(comment_id) {
  return axios.delete(
    `https://news-webpage-project.onrender.com/api/comments/${comment_id}`
  );
}

export default getArticles;
