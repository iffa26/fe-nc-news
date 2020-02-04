import React from "react";
import { Link } from "@reach/router";

class TopicsList extends React.Component {
  state = {
    topics: [
      {
        slug: "coding",
        description: "Code is love, code is life"
      },
      {
        slug: "football",
        description: "FOOTIE!"
      },
      {
        slug: "cooking",
        description: "Hey good looking, what you got cooking?"
      }
    ]
  };

  render() {
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
  }

  componentDidMount() {
    // api call for /api/articles here
    // if url has prop
    // axios params in api
  }
}

export { TopicsList };
