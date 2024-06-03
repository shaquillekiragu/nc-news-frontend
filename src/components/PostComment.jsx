import { postComment } from "../api";
import { useState } from "react";

function PostComment({ article_id }) {
  const [postedBody, setPostedBody] = useState("");
  const [currentInput, setCurrentInput] = useState("");
  const [hasPosted, setHasPosted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // I'm currently hardcoding in the username below, but I will refactor to implement useContext to have the user set the username in the login page on a later ticket because of time.
  const username = "cooljmessy";

  function handleChange(event) {
    event.preventDefault();
    setCurrentInput(event.target.value);
    console.log(currentInput, "currentInput");
  }

  function handleSubmit(event) {
    event.preventDefault();
    setPostedBody(currentInput);
    setHasPosted(true);
    console.log(postedBody, "postedBody");
    postComment(article_id, username, postedBody).then(() => {
      setIsLoading(false);
      setHasPosted(false);
    });
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
