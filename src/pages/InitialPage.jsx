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
      <div className="thinRedBanner"></div>
      <p>Welcome to NC News!</p>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleSignupClick}>Sign Up!</button>
      <br />
      <br />
      <label htmlFor="proceed">Proceed without logging in: </label>
      <button
        id="proceed"
        onClick={() => {
          navigate("/articles");
        }}
      >
        Proceed
      </button>
    </>
  );
}

export default InitialPage;
