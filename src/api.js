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

export function postUser(username, name, avatar_url) {
  return axios.post(`https://news-webpage-project.onrender.com/api/users`, {
    username,
    name,
    avatar_url,
  });
}

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

export function patchCommentVoteCount(
  article_id,
  comment_id,
  inc_comment_votes
) {
  return axios.patch(
    `https://news-webpage-project.onrender.com/api/articles/${article_id}/comments/${comment_id}`,
    {
      inc_comment_votes: inc_comment_votes,
    }
  );
}

// DELETE:

export function deleteComment(comment_id) {
  return axios.delete(
    `https://news-webpage-project.onrender.com/api/comments/${comment_id}`
  );
}
