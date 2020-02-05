import React from "react";
import { Link } from "@reach/router";
import * as api from "../api";

class ArticlesList extends React.Component {
  state = {
    articles: [],
    comment_count: { order: "desc" },
    votes: { order: "desc" },
    created_at: { order: "desc" }
  };

  render() {
    console.log("articles", this.state.articles);
    return (
      <main>
        <h2>Articles List {this.props.topic_slug}</h2>
        <section>
          Sort by:
          <button id="comment_count" onClick={this.sortArticles}>
            comments
          </button>
          <button id="created_at" onClick={this.sortArticles}>
            date
          </button>
          <button id="votes" onClick={this.sortArticles}>
            votes
          </button>
        </section>
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
                <h4> {article.votes} votes</h4>
                <h4> {article.created_at} </h4>
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
    //console.log("in fetchArticles", this.props);
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

  sortArticles = event => {
    const sort_by = event.target.id;
    const order = this.state[sort_by].order;

    api.getArticles(null, sort_by, order).then(articles => {
      let newOrder = "asc";
      if (order === "asc") {
        newOrder = "desc";
      }
      this.setState({ articles, [sort_by]: { order: newOrder } });
    });
  };
}

export { ArticlesList };
