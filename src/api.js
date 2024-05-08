function getArticles() {
  return fetch("https://news-webpage-project.onrender.com/api/articles").then(
    (response) => {
      if (!response.ok) {
        return Promise.reject({
          status: response.status,
          message: response.statusText,
        });
      }
      return response.json();
    }
  );
}

export function getArticle(id) {
  return fetch(
    `https://news-webpage-project.onrender.com/api/articles/${id}`
  ).then((response) => {
    if (!response.ok) {
      return Promise.reject({
        status: response.status,
        message: response.statusText,
      });
    }
    return response.json();
  });
}

export default getArticles;
