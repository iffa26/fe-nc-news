import React from "react";
import * as api from "../api";

class AddComment extends React.Component {
  //this.props.article_id available here
  state = {
    username: "jessjelly",
    newCommentInput: "",
    newCommentPost: null
  };

  render() {
    const { newCommentInput, newCommentPost } = this.state;
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="newCommentInput"
            onChange={this.handleInput}
            value={newCommentInput}
          />
          <button>post!</button>
        </form>
        {newCommentPost && (
          <ul>
            <li key={newCommentPost.comment_id}>
              <p>***temp***{newCommentPost.body}</p>
              <p>
                @{newCommentPost.author} - votes: {newCommentPost.votes}
              </p>
              <p>{newCommentPost.created_at}</p>
            </li>
          </ul>
        )}
      </section>
    );
  }

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.addComment();
  };

  addComment = () => {
    const { article_id } = this.props;
    const { username, newCommentInput } = this.state;
    api.postComment(article_id, newCommentInput, username).then(comment => {
      this.setState({ newCommentPost: comment, newCommentInput: "" });
    });
  };
}

export { AddComment };
