import React from "react";
import { Link } from "@reach/router";
import * as api from "../../api";

class TopicsList extends React.Component {
  state = {
    topics: null,
    isLoading: true
  };

  render() {
    const { topics } = this.state;
    if (topics) {
      return (
        <main>
          <h2>Topics List</h2>
          <ul>
            {this.state.topics.map(topic => {
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
    } else return <main>Loading...</main>;
  }

  componentDidMount() {
    this.fetchTopics();
  }
  fetchTopics = () => {
    api.getTopics().then(topics => {
      this.setState({ topics, isLoading: false });
    });
  };
}

export { TopicsList };
