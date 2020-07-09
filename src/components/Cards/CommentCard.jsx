import React from "react";
import { VotingButtons } from "../ButtonsAndForms/VotingButtons";
import { DeleteCommentButton } from "../ButtonsAndForms/DeleteCommentButton";
import { FormatDate } from "../PagesAndSections/FormatDate";

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
        </p>
        <p>{deleteErr && <p>error deleting comment, try again later</p>}</p>
        <p className="CommentCard-author">
          by @{comment.author},
          <FormatDate rawDateString={comment.created_at} /> ago
        </p>
      </section>
      <section className="CommentCard-right">
        <section className="CommentCard-votes">
          <VotingButtons
            comment_id={comment.comment_id}
            votes={comment.votes}
            userLoggedIn={userLoggedIn}
          />
        </section>
      </section>
    </li>
  );
}

export { CommentCard };
