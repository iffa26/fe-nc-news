import React from "react";

class AddComment extends React.Component {
  state = {
    newCommentInput: ""
  };

  render() {
    const { newCommentInput } = this.state;
    const { userLoggedIn } = this.props;
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input
            className="AddComment-input"
            type="text"
            name="newCommentInput"
            onChange={this.handleInput}
            value={newCommentInput}
          />
          <button disabled={userLoggedIn === null}>post a comment!</button>
          {!userLoggedIn && <p>Login to comment and vote!</p>}
        </form>
      </section>
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
    this.setState({ newCommentInput: "" });
    this.props.addComment(newCommentInput, userLoggedIn);
  };
}

export { AddComment };
