import React from "react";
//import { Link } from "@reach/router";
import * as api from "../../api";
import { ArticleCard } from "../Cards/ArticleCard";
import { SortByButtons } from "../ButtonsAndForms/SortByButtons";

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
        <SortByButtons sortArticles={this.sortArticles} />
        <ul>
          {this.state.articles.map(article => {
            return <ArticleCard article={article} key={article.article_id} />;
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
