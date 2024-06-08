import { useAuth } from "../contexts/UserContext";
import { patchVoteCount } from "../api";

function PatchArticleVotes({ setVoteCount, article, article_id }) {
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

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
  if (authUser.username !== article.author) {
    return (
      <>
        <form action="">
          <button onClick={handleUpvoteClick}>Upvote</button>
          <button onClick={handleDownvoteClick}>Downvote</button>
        </form>
      </>
    );
  }
}

export default PatchArticleVotes;