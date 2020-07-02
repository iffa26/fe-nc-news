import React from "react";
import * as api from "../../api";

class VotingButtons extends React.Component {
  state = { changeVotesBy: 0 };
  render() {
    const { userLoggedIn } = this.props;

    return (
      <p className="Voting">
        <button
          onClick={() => this.handleClick(1)}
          disabled={this.state.changeVotesBy > 0 || userLoggedIn === null}
        >
          <span role="img" aria-label="thumbs-up">
            👍
          </span>
        </button>
        <span className="Voting-number">
          {this.props.votes + this.state.changeVotesBy}
        </span>
        <button
          onClick={() => this.handleClick(-1)}
          disabled={this.state.changeVotesBy < 0 || userLoggedIn === null}
        >
          <span role="img" aria-label="thumbs-down">
            👎
          </span>
        </button>
      </p>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.changeVotesBy !== 0) this.setState({ changeVotesBy: 0 });
  }

  handleClick = (changeVotesBy) => {
    const { article_id, comment_id } = this.props;
    if (article_id) {
      this.setState({ changeVotesBy });
    }
    if (comment_id) {
      this.setState({ changeVotesBy });
    }
    this.updateVotes(changeVotesBy);
  };

  updateVotes = (changeVotesBy) => {
    const { article_id, comment_id } = this.props;

    if (article_id) api.patchArticleVotes(article_id, changeVotesBy);
    if (comment_id) api.patchCommentVotes(comment_id, changeVotesBy);
  };
}

export { VotingButtons };
