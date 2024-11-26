import { useState } from "react";
import { useAuth } from "../contexts/UserContext";
import { postComment } from "../api";
import Footer from "../components/Footer/Footer";

function PostArticle() {
  const { authUser } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [hasPosted, setHasPosted] = useState(false);

  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [votes, setVotes] = useState(0);
  const [avatarUrl, setAvatarUrl] = useState("");

  setAuthor(authUser.username);
  setCreatedAt(new Date().toLocaleDateString());

  function handleTitleChange(event) {
    event.preventDefault();
    setTitle(event.target.value);
  }

  function handleTopicChange(event) {
    event.preventDefault();
    setTopic(event.target.value);
  }

  function handleBodyChange(event) {
    event.preventDefault();
    setBody(event.target.value);
  }

  function handleAvatarChange(event) {
    event.preventDefault();
    setAvatarUrl(event.target.value);
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      setHasPosted(true);
      await postComment(
        title,
        topic,
        author,
        body,
        createdAt,
        votes,
        avatarUrl
      );
      setHasPosted(false);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setHasPosted(false);
      setIsLoading(true);
    }
  }

  if (isLoading && hasPosted) {
    return (
      <p>
        <em>Posting article...</em>
      </p>
    );
  }
  return (
    <>
      <h2>Write your own article</h2>
      <form onSubmit={handleSubmit}>
        <input id="title" type="text" onChange={handleTitleChange} required />
        <input id="topic" type="text" onChange={handleTopicChange} required />
        <input id="body" type="text" onChange={handleBodyChange} required />
        <input id="avatarUrl" type="text" onChange={handleAvatarChange} />
      </form>
      <Footer />
    </>
  );
}

export default PostArticle;
