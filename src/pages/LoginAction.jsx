import { useNavigate } from "react-router-dom";
import "../stylesheets/LoginAction.css";

function LoginAction() {
  const navigate = useNavigate();

  function handleLoginClick() {
    navigate("/login");
  }
  function handleSignupClick() {
    navigate("/signup");
  }

  return (
    <>
      <div className="thinRedBanner"></div>
      <p>Welcome to NC News!</p>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleSignupClick}>Sign Up!</button>
    </>
  );
}

export default LoginAction;
