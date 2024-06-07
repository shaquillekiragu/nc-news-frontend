import { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

function InitialPage() {
  const [isLoading, setIsLoading] = useState();

  if (isLoading) {
    return <Loading page={"Reddit News is"} />;
  }
  return (
    <>
      <p>
        Welcome to Reddit News! Because, you know, the world definitely needed
        another groundbreaking social network...
      </p>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/signup">Sign Up!</Link>
    </>
  );
}

export default InitialPage;
