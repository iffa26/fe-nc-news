import React from "react";

class DeleteCommentButton extends React.Component {
  state = { username: "jessjelly" };

  render() {
    const { comment_id, removeComment } = this.props;
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
}

export { DeleteCommentButton };

// need to pass comment_id on props here
