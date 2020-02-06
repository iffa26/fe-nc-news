import React from "react";
import * as api from "../../api";
import { AddComment } from "../ButtonsAndForms/AddComment";
import { CommentCard } from "../Cards/CommentCard";

class ArticleComments extends React.Component {
  // this.props.article_id available here
  state = {
    comments: [],
    username: "jessjelly"
  };

  // need a fucntion which takes new comment and deletes it from state. dont mutate. pass this too DeleteComment component

  render() {
    const { comments, username } = this.state;
    console.log(comments);
    if (comments) {
      return (
        <section>
          ArticleComments
          <AddComment username={username} addComment={this.addComment} />
          <ul>
            {comments.map(comment => {
              return (
                <CommentCard
                  key={comment.comment_id}
                  comment={comment}
                  username={username}
                  removeComment={this.removeComment}
                />
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

  fetchCommentsByArticleId = () => {
    api.getCommentsByArticleId(this.props.article_id).then(comments => {
      this.setState({ comments });
    });
  };

  addComment = (newCommentInput, username) => {
    const { article_id } = this.props;
    console.log(article_id, newCommentInput, username);

    api.postComment(article_id, newCommentInput, username).then(comment => {
      console.log(comment);
      this.setState({ comments: [comment, ...this.state.comments] });
    });
  };

  removeComment = comment_id => {
    api.deleteComment(comment_id);
    const newComments = this.state.comments.filter(comment => {
      return comment.comment_id !== comment_id;
    });
    this.setState({ comments: newComments });
  };
}

export { ArticleComments };
