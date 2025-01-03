import { patchCommentVoteCount } from "../../api";
import "./PatchCommentVotes.css";

function PatchArticleVotes({ comment, article_id, setCommentVoteCount }) {
  async function handleCommentUpvoteClick(event) {
    try {
      event.preventDefault();
      let inc_comment_votes = 0;
      setCommentVoteCount((currentCommentVoteCount) => {
        if (currentCommentVoteCount !== comment.votes + 1) {
          ++inc_comment_votes;
          return currentCommentVoteCount + 1;
        }
        return currentCommentVoteCount;
      });
      await patchCommentVoteCount(
        article_id,
        comment.comment_id,
        inc_comment_votes
      );
    } catch (err) {
      console.error(err);
    }
  }

  async function handleCommentDownvoteClick(event) {
    try {
      event.preventDefault();
      let inc_comment_votes = 0;
      setCommentVoteCount((currentCommentVoteCount) => {
        if (currentCommentVoteCount !== comment.votes - 1) {
          --inc_comment_votes;
          return currentCommentVoteCount - 1;
        }
        return currentCommentVoteCount;
      });
      await patchCommentVoteCount(
        article_id,
        comment.comment_id,
        inc_comment_votes
      );
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <form action="">
        <button onClick={handleCommentUpvoteClick}>Upvote</button>
        <button onClick={handleCommentDownvoteClick}>Downvote</button>
      </form>
    </>
  );
}

export default PatchArticleVotes;
