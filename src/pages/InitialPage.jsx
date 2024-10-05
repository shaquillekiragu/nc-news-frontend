import { useNavigate } from "react-router-dom";
import "../stylesheets/InitialPage.css";

function InitialPage() {
  const navigate = useNavigate();

  return (
    <>
      <p>WELCOME TO NC News!</p>
      <button
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
