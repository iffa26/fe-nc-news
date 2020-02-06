import React from "react";
import * as api from "../../api";
import { ArticleCard } from "../Cards/ArticleCard";
import { SortByButtons } from "../ButtonsAndForms/SortByButtons";
import { ErrorPage } from "../PagesAndSections/ErrorPage";
import { Loading } from "../PagesAndSections/Loading";

class ArticlesList extends React.Component {
  state = {
    articles: null,
    comment_count: { order: "desc" },
    votes: { order: "desc" },
    created_at: { order: "desc" },
    err: null
  };

  render() {
    const { articles, err } = this.state;

    if (err) return <ErrorPage err={err} />;
    if (articles) {
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
    } else
      return (
        <main>
          <Loading />
        </main>
      );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = () => {
    const { topic_slug } = this.props;
    api
      .getArticles(topic_slug)
      .then(articles => {
        this.setState({ articles, err: null });
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  sortArticles = event => {
    const sort_by = event.target.id;
    const order = this.state[sort_by].order;

    api
      .getArticles(null, sort_by, order)
      .then(articles => {
        let newOrder = "asc";
        if (order === "asc") {
          newOrder = "desc";
        }
        this.setState({ articles, [sort_by]: { order: newOrder }, err: null });
      })
      .catch(err => {
        this.setState({ err });
      });
  };
}

export { ArticlesList };
