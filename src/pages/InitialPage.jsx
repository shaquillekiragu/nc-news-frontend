import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

function InitialPage() {
  const [isLoading, setIsLoading] = useState();
  const navigate = useNavigate();

  function handleLoginClick() {
    navigate("/login");
  }
  function handleSignupClick() {
    navigate("/signup");
  }

  if (isLoading) {
    return <Loading page={"Reddit News is"} />;
  }
  return (
    <>
      <p>
        Welcome to Reddit News! Because, you know, the world definitely needed
        another groundbreaking social network...
      </p>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleSignupClick}>Sign Up!</button>
    </>
  );
}

export default InitialPage;
