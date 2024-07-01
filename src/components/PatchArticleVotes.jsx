import { useAuth } from "../contexts/UserContext";
import { patchVoteCount } from "../api";

function PatchArticleVotes({ setVoteCount, article, article_id }) {
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

  async function handleUpvoteClick(event) {
    try {
      event.preventDefault();
      let inc_votes = 0;
      setVoteCount((currentVoteCount) => {
        if (currentVoteCount !== article.votes + 1) {
          ++inc_votes;
          return currentVoteCount + 1;
        }
        return currentVoteCount;
      });
      await patchVoteCount(article_id, inc_votes);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleDownvoteClick(event) {
    try {
      event.preventDefault();
      let inc_votes = 0;
      setVoteCount((currentVoteCount) => {
        if (currentVoteCount !== article.votes - 1) {
          --inc_votes;
          return currentVoteCount - 1;
        }
        return currentVoteCount;
      });
      await patchVoteCount(article_id, inc_votes);
    } catch (err) {
      console.error(err);
    }
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
