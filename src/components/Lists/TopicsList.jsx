import React from "react";
import { Link } from "@reach/router";
import * as api from "../../api";
import { Loading } from "../PagesAndSections/Loading";
import { ErrorPage } from "../PagesAndSections/ErrorPage";

class TopicsList extends React.Component {
  state = {
    topics: null,
    isLoading: true,
    err: null,
  };

  render() {
    const { topics, err } = this.state;
    if (err) return <ErrorPage err={err} />;
    if (topics) {
      return (
        <main>
          <h3> Trending topics </h3>
          <ul>
            {this.state.topics.map((topic) => {
              return (
                <li key={topic.slug}>
                  <Link to={`/articles/topic/${topic.slug}`}>
                    <h3>{topic.slug}</h3>
                  </Link>
                </li>
              );
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
    this.fetchTopics();
  }
  fetchTopics = () => {
    api
      .getTopics()
      .then((topics) => {
        this.setState({ topics, isLoading: false, err: null });
      })
      .catch((err) => {
        this.setState({ err });
      });
  };
}

export { TopicsList };
