import React from "react";
import { VotingButtons } from "../ButtonsAndForms/VotingButtons";
import { DeleteCommentButton } from "../ButtonsAndForms/DeleteCommentButton";

function CommentCard(props) {
  const { comment, username, removeComment } = props;
  return (
    <li>
      <p>{comment.body}</p>
      <div>
        @{comment.author}
        <VotingButtons comment_id={comment.comment_id} votes={comment.votes} />
      </div>
      <p>{comment.created_at}</p>
      {username === comment.author && (
        <DeleteCommentButton
          comment_id={comment.comment_id}
          removeComment={removeComment}
        />
      )}
    </li>
  );
}

export { CommentCard };
