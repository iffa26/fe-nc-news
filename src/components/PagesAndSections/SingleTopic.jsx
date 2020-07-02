import React from "react";

class SingleTopic extends React.Component {
  state = { topic: {} };
  // article_id accessible on props here
  render() {
    return <h3>Single Topic: {this.props.topic_slug} ! </h3>;
  }
}

export { SingleTopic };
