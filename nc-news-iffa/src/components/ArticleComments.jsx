import React from "react";
import * as api from "../api";
import { AddComment } from "../components/AddComment";

class ArticleComments extends React.Component {
  // this.props.article_id available here
  state = {
    comments: null
  };

  render() {
    const { comments } = this.state;
    //console.log(comments);
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
                  <p>
                    @{comment.author} - votes: {comment.votes}
                  </p>
                  <p>{comment.created_at}</p>
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

  componentDidUpdate(prevProps, prevState) {
    // if(!prevState.newCommentSubmit) {
    // }
  }

  fetchCommentsByArticleId = () => {
    api.getCommentsByArticleId(this.props.article_id).then(comments => {
      this.setState({ comments });
    });
  };
}

export { ArticleComments };
