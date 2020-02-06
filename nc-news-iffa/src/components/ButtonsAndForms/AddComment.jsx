import React from "react";
//import * as api from "../api";

class AddComment extends React.Component {
  state = {
    newCommentInput: ""
  };

  render() {
    const { newCommentInput } = this.state;
    const { userLoggedIn } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="newCommentInput"
          onChange={this.handleInput}
          value={newCommentInput}
        />
        <button disabled={userLoggedIn === null}>post!</button>
        <p>Login to comment and vote!</p>
      </form>
    );
  }

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { newCommentInput } = this.state;
    const { userLoggedIn } = this.props;
    this.props.addComment(newCommentInput, userLoggedIn);
    this.setState({ newCommentInput: "" });
  };
}

export { AddComment };
