import { patchVoteCount } from "../api";

function PatchArticleVotes({ setVoteCount, article, article_id }) {
  function handleUpvoteClick(event) {
    event.preventDefault();
    let inc_votes = 0;
    setVoteCount((currentVoteCount) => {
      if (currentVoteCount !== article.votes + 1) {
        ++inc_votes;
        return currentVoteCount + 1;
      }
      return currentVoteCount;
    });
    patchVoteCount(article_id, inc_votes).catch((err) => {
      console.log(err);
    });
  }

  function handleDownvoteClick(event) {
    event.preventDefault();
    let inc_votes = 0;
    setVoteCount((currentVoteCount) => {
      if (currentVoteCount !== article.votes - 1) {
        --inc_votes;
        return currentVoteCount - 1;
      }
      return currentVoteCount;
    });
    patchVoteCount(article_id, inc_votes).catch((err) => {
      console.log(err);
    });
  }

  return (
    <>
      <form action="">
        <button onClick={handleUpvoteClick}>Upvote</button>
        <button onClick={handleDownvoteClick}>Downvote</button>
      </form>
    </>
  );
}

export default PatchArticleVotes;
