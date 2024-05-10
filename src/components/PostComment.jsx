import { getCommentsByArticleId } from "../api";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { UsernameContext } from "../contexts/LoginContext";

function PostComment({ id }) {
  const { username, setUsername } = useContext(UsernameContext);
  console.log(username, "username");
  const [commentsIdList, setCommentsIdList] = useState([]);

  useEffect(() => {
    getCommentsByArticleId(id).then((response) => {
      const arr = response.data.comments;
      const newArr = arr.map((comment) => {
        return comment.comment_id;
      });
      setCommentsIdList(newArr);
    });
  }, []);

  let comm_id = 1;
  for (let i = 1; !commentsIdList.includes(i); i++) {
    comm_id = i;
  }
  const newComment = {};

  function handleChange(event) {
    event.preventDefault();
    newComment.body = event.target.value;
  }

  function handleClick(event) {
    event.preventDefault();
    newComment.comment_id = comm_id;
    newComment.votes = 0;
    newComment.created_at = 0;
    newComment.author = username;
    newComment.article_id = id;
    console.log(newComment, "newComment");
  }

  return (
    <>
      <form action="">
        <label htmlFor="body">Comment: </label>
        <input
          id="body"
          type="text"
          placeholder="Write new comment here..."
          onChange={handleChange}
          required
        ></input>
        <button type="submit" onClick={handleClick}>
          Post comment
        </button>
      </form>
    </>
  );
}

export default PostComment;
