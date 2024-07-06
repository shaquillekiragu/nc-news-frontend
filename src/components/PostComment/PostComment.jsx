import { useState } from "react";
import { useAuth } from "../../contexts/UserContext";
import { postComment } from "../../api";
import "./PostComment.css";

function PostComment({ article_id }) {
  const [postedBody, setPostedBody] = useState("");
  const [currentInput, setCurrentInput] = useState("");
  const [hasPosted, setHasPosted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

  function handleChange(event) {
    event.preventDefault();
    setCurrentInput(event.target.value);
    console.log(currentInput, "currentInput");
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      setPostedBody(currentInput);
      setHasPosted(true);
      console.log(postedBody, "postedBody");
      await postComment(article_id, authUser.username, postedBody);
      setIsLoading(false);
      setHasPosted(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      setHasPosted(false);
    }
  }

  if (isLoading && hasPosted) {
    return <p>Posting comment...</p>;
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="body">Comment: </label>
        <input
          id="body"
          type="text"
          placeholder="Write new comment here..."
          onChange={handleChange}
          required
        ></input>
        <button type="submit">Post comment</button>
      </form>
    </>
  );
}

export default PostComment;
