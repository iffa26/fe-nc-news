import React from "react";
//import * as api from "../api";

class AddComment extends React.Component {
  //this.props.article_id available here
  state = {
    newCommentInput: ""
  };

  render() {
    const { newCommentInput } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="newCommentInput"
          onChange={this.handleInput}
          value={newCommentInput}
        />
        <button>post!</button>
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
    const { username } = this.props;
    this.props.addComment(newCommentInput, username);
    this.setState({ newCommentInput: "" });
  };
}

export { AddComment };
