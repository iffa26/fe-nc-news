import React from "react";
import { VotingButtons } from "../ButtonsAndForms/VotingButtons";
import { DeleteCommentButton } from "../ButtonsAndForms/DeleteCommentButton";

function CommentCard(props) {
  const { comment, userLoggedIn, removeComment, deleteErr } = props;
  return (
    <li>
      <p>{comment.body}</p>
      <div>
        @{comment.author}
        <VotingButtons
          comment_id={comment.comment_id}
          votes={comment.votes}
          userLoggedIn={userLoggedIn}
        />
      </div>
      <p>{comment.created_at}</p>
      {userLoggedIn === comment.author && (
        <DeleteCommentButton
          comment_id={comment.comment_id}
          removeComment={removeComment}
          userLoggedIn={userLoggedIn}
        />
      )}
      {deleteErr && <p>error deleting comment, try again later</p>}
    </li>
  );
}

export { CommentCard };
