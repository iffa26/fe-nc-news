import React from "react";
import * as api from "../../api";
import { ArticleComments } from "../Lists/ArticleComments";
import { VotingButtons } from "../ButtonsAndForms/VotingButtons";
import { ErrorPage } from "./ErrorPage";
import { Loading } from "./Loading";
import { Link } from "@reach/router";

class SingleArticle extends React.Component {
  state = { article: null, err: null, isLoading: true };

  render() {
    const { article, err } = this.state;
    const { userLoggedIn } = this.props;

    if (err) return <ErrorPage err={err} />;
    if (article) {
      return (
        <main>
          <h2 className="SingleArticle-title">{article.title}</h2>
          <p className="SingleArticle-body">{article.body}</p>
          <section className="SingleArticle-info">
            by @{article.author} in &nbsp;
            <Link to={`/articles/topic/${article.topic}`}>{article.topic}</Link>
            <VotingButtons
              votes={article.votes}
              article_id={article.article_id}
              userLoggedIn={userLoggedIn}
            />
          </section>
          <ArticleComments
            article_id={article.article_id}
            userLoggedIn={userLoggedIn}
          />
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
    this.fetchSingleArticle();
  }

  fetchSingleArticle = () => {
    const { article_id } = this.props;
    api
      .getSingleArticle(article_id)
      .then(article => {
        this.setState({ article, err: null });
      })
      .catch(err => {
        this.setState({ err });
      });
  };
}

export { SingleArticle };
