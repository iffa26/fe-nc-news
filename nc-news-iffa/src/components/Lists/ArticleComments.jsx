import React from "react";
import * as api from "../../api";
import { AddComment } from "../ButtonsAndForms/AddComment";
import { CommentCard } from "../Cards/CommentCard";

class ArticleComments extends React.Component {
  state = {
    comments: null,
    postErr: null,
    deleteErr: null
  };

  render() {
    const { comments, postErr, deleteErr } = this.state;
    const { userLoggedIn } = this.props;

    if (comments) {
      return (
        <section>
          ArticleComments
          <AddComment
            userLoggedIn={userLoggedIn}
            addComment={this.addComment}
          />
          {postErr && <p>Error posting comment, try again later</p>}
          <ul>
            {comments.map(comment => {
              return (
                <CommentCard
                  key={comment.comment_id}
                  comment={comment}
                  userLoggedIn={userLoggedIn}
                  removeComment={this.removeComment}
                  deleteErr={deleteErr}
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

  addComment = (newCommentInput, userLoggedIn) => {
    const { article_id } = this.props;

    api
      .postComment(article_id, newCommentInput, userLoggedIn)
      .then(comment => {
        this.setState({
          comments: [comment, ...this.state.comments],
          postErr: null
        });
      })
      .catch(err => {
        this.setState({ postErr: err });
      });
  };

  removeComment = comment_id => {
    api.deleteComment(comment_id).catch(err => {
      this.setState({ deleteErr: err });
    });
    const newComments = this.state.comments.filter(comment => {
      return comment.comment_id !== comment_id;
    });
    this.setState({ comments: newComments, deleteErr: null });
  };
}

export { ArticleComments };