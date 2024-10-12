import "./Loading.css";

function Loading({ page }) {
  return (
    <>
      <br />
      <div className="loadingAnimation loader"></div>
      <p>
        <em>{page} loading...</em>
      </p>
    </>
  );
}

export default Loading;
