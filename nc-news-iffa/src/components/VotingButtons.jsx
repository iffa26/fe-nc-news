import React from "react";
import * as api from "../api";

class VotingButtons extends React.Component {
  state = { changeVotesBy: 0 };
  render() {
    console.log("render", this.state.changeVotesBy);
    return (
      <p>
        votes: {this.props.votes + this.state.changeVotesBy}
        <button
          onClick={() => this.handleClick(1)}
          disabled={this.state.changeVotesBy > 0}
        >
          +
        </button>
        <button
          onClick={() => this.handleClick(-1)}
          disabled={this.state.changeVotesBy < 0}
        >
          -
        </button>
      </p>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.changeVotesBy !== 0) this.setState({ changeVotesBy: 0 });
  }

  handleClick = changeVotesBy => {
    const { article_id, comment_id } = this.props;
    if (article_id) {
      this.setState({ changeVotesBy });
    }
    if (comment_id) {
      this.setState({ changeVotesBy });
    }
    this.updateVotes(changeVotesBy);
  };

  updateVotes = changeVotesBy => {
    const { article_id, comment_id } = this.props;

    if (article_id) api.patchArticleVotes(article_id, changeVotesBy);
    if (comment_id) api.patchCommentVotes(comment_id, changeVotesBy);
  };
}

export { VotingButtons };
