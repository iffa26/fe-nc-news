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
    sort_by_selected: "created_at",
    err: null
  };

  render() {
    const { articles, err, sort_by_selected } = this.state;

    if (err) return <ErrorPage err={err} />;
    if (articles) {
      return (
        <main>
          <SortByButtons
            sortArticles={this.sortArticles}
            sort_by_selected={sort_by_selected}
            sort_by_direction={this.state[sort_by_selected].order}
          />
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
    const topic_slug = this.props.topic_slug;
    api
      .getArticles(topic_slug, sort_by, order)
      .then(articles => {
        let newOrder = "asc";
        if (order === "asc") {
          newOrder = "desc";
        }
        this.setState({
          articles,
          [sort_by]: { order: newOrder },
          err: null,
          sort_by_selected: sort_by
        });
      })
      .catch(err => {
        this.setState({ err });
      });
  };
}

export { ArticlesList };
