import React from "react";
import { VotingButtons } from "../ButtonsAndForms/VotingButtons";
import { DeleteCommentButton } from "../ButtonsAndForms/DeleteCommentButton";

function CommentCard(props) {
  const { comment, userLoggedIn, removeComment, deleteErr } = props;
  return (
    <li className="CommentCard">
      <section className="CommentCard-left">
        <p className="CommentCard-body">{comment.body}</p>
        <p className="CommentCard-deleteButton">
          {userLoggedIn === comment.author && (
            <DeleteCommentButton
              comment_id={comment.comment_id}
              removeComment={removeComment}
              userLoggedIn={userLoggedIn}
            />
          )}
        </p>{" "}
        <p>{deleteErr && <p>error deleting comment, try again later</p>}</p>
        <p className="CommentCard-author">
          by @{comment.author} at {comment.created_at}
        </p>
      </section>
      <section className="CommentCard-right">
        <p className="CommentCard-votes">
          <VotingButtons
            comment_id={comment.comment_id}
            votes={comment.votes}
            userLoggedIn={userLoggedIn}
          />
        </p>
      </section>
    </li>
  );
}

export { CommentCard };
