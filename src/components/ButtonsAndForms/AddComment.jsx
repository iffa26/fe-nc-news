import React from "react";

class AddComment extends React.Component {
  state = {
    newCommentInput: "",
  };

  render() {
    const { newCommentInput } = this.state;
    const { userLoggedIn } = this.props;
    return (
      <section className="AddComment">
        <form onSubmit={this.handleSubmit}>
          <input
            className="AddComment-input"
            type="text"
            name="newCommentInput"
            placeholder={
              userLoggedIn ? "Add a new comment" : "Login to post a comment"
            }
            onChange={this.handleInput}
            value={newCommentInput}
          />
          <button
            className="AddComment-button"
            disabled={userLoggedIn === null}
          >
            Post comment!
          </button>
        </form>
      </section>
    );
  }

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { newCommentInput } = this.state;
    const { userLoggedIn } = this.props;
    this.setState({ newCommentInput: "" });
    this.props.addComment(newCommentInput, userLoggedIn);
  };
}

export { AddComment };
