import React from "react";
import * as api from "../api";
import { ArticleComments } from "./ArticleComments";

class SingleArticle extends React.Component {
  state = { article: null };
  // article_id accessible on props here
  render() {
    const { article } = this.state;
    if (article) {
      return (
        <main>
          <h2>{article.title}</h2>
          <p>{article.body}</p>
          <ArticleComments article_id={article.article_id} />
        </main>
      );
    } else return <main></main>;
  }

  componentDidMount() {
    this.fetchSingleArticle();
  }

  fetchSingleArticle = () => {
    const { article_id } = this.props;
    api.getSingleArticle(article_id).then(article => {
      this.setState({ article });
    });
  };
}

export { SingleArticle };
