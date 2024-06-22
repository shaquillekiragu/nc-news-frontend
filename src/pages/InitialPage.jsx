import { useNavigate } from "react-router-dom";

function InitialPage() {
  const navigate = useNavigate();

  function handleLoginClick() {
    navigate("/login");
  }
  function handleSignupClick() {
    navigate("/signup");
  }

  return (
    <>
      <p>
        Welcome to NC News! Because you know, the world definitely needed
        another groundbreaking news network...
      </p>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleSignupClick}>Sign Up!</button>
    </>
  );
}

export default InitialPage;
