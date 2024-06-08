import axios from "axios";

// GET:

export default function getArticles(urlStr) {
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

export function getComments(article_id) {
  return axios.get(
    `https://news-webpage-project.onrender.com/api/articles/${article_id}/comments`
  );
}

// POST:

export function postComment(article_id, username, postedBody) {
  return axios.post(
    `https://news-webpage-project.onrender.com/api/articles/${article_id}/comments`,
    { username, postedBody }
  );
}

// PATCH:

export function patchVoteCount(article_id, inc_votes) {
  return axios.patch(
    `https://news-webpage-project.onrender.com/api/articles/${article_id}`,
    {
      inc_votes: inc_votes,
    }
  );
}

export function patchCommentVoteCount(comment_id, inc_votes) {
  return axios.patch(
    `https://news-webpage-project.onrender.com/api/comments/${comment_id}`,
    {
      inc_votes: inc_votes,
    }
  );
}

// DELETE:

export function deleteComment(comment_id) {
  return axios.delete(
    `https://news-webpage-project.onrender.com/api/comments/${comment_id}`
  );
}
