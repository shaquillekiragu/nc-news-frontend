import { useNavigate } from "react-router-dom";
import "../stylesheets/IndexPage.css";

function IndexPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="thinRedBanner"></div>
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

export default IndexPage;
