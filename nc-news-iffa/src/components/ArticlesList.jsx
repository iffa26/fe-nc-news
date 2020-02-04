import React from "react";
import { Link } from "@reach/router";
import * as api from "../api";

class ArticlesList extends React.Component {
  state = {
    articles: []
  };

  render() {
    return (
      <main>
        <h2>Articles List {this.props.topic_slug}</h2>
        <ul>
          {this.state.articles.map(article => {
            return (
              <li key={article.article_id}>
                <Link to={`/article/${article.article_id}`}>
                  <h3>{article.title}</h3>
                </Link>
                <Link to={`/articles/topic/${article.topic}`}>
                  <h4>{article.topic}</h4>
                </Link>
                <h4> {article.comment_count} comments</h4>
              </li>
            );
          })}
        </ul>
      </main>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = () => {
    console.log("in fetchArticles", this.props);
    const { topic_slug } = this.props;
    api
      .getArticles(topic_slug)
      .then(articles => {
        this.setState({ articles });
      })
      .catch(err => {
        console.log(err);
        //this.setState({err:err})
      });
  };
}

export { ArticlesList };
