import React from "react";
import * as api from "../api";
import { AddComment } from "../components/AddComment";
import { VotingButtons } from "./VotingButtons";
import { DeleteCommentButton } from "./DeleteCommentButton";

class ArticleComments extends React.Component {
  // this.props.article_id available here
  state = {
    comments: [],
    username: "jessjelly"
  };

  // need a fucntion which takes new comment and deletes it from state. dont mutate. pass this too DeleteComment component

  render() {
    const { comments } = this.state;
    console.log(comments);
    if (comments) {
      return (
        <section>
          ArticleComments
          <AddComment article_id={this.props.article_id} />
          <ul>
            {comments.map(comment => {
              return (
                <li key={comment.comment_id}>
                  <p>{comment.body}</p>
                  <div>
                    @{comment.author}
                    <VotingButtons
                      comment_id={comment.comment_id}
                      votes={comment.votes}
                    />
                  </div>
                  <p>{comment.created_at}</p>
                  {this.state.username === comment.author && (
                    <DeleteCommentButton
                      comment_id={comment.comment_id}
                      removeComment={this.removeComment}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      );
    } else return <section></section>;
  }

  componentDidMount() {
    this.fetchCommentsByArticleId();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.comments.length !== this.state.comments.length) {
  //     this.fetchCommentsByArticleId();
  //   }
  // }

  fetchCommentsByArticleId = () => {
    api.getCommentsByArticleId(this.props.article_id).then(comments => {
      this.setState({ comments });
    });
  };

  removeComment = comment_id => {
    api.deleteComment(comment_id);
  };
}

export { ArticleComments };
