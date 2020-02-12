import React from "react";

function DeleteCommentButton(props) {
  const { comment_id, removeComment } = props;
  return (
    <button
      onClick={() => {
        removeComment(comment_id);
      }}
    >
      delete this comment?
    </button>
  );
}

export { DeleteCommentButton };
