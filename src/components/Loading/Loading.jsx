import "./Loading.css";

function Loading({ page }) {
  return (
    <div className="loadingContainer">
      <div className="loader"></div>
      <p>
        <em>{page} loading...</em>
      </p>
    </div>
  );
}

export default Loading;
