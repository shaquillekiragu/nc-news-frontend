import { useNavigate } from "react-router-dom";
import "../stylesheets/InitialPage.css";

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
      <p>Welcome to NC News!</p>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleSignupClick}>Sign Up!</button>
    </>
  );
}

export default InitialPage;
