import React from "react";

class SingleTopic extends React.Component {
  state = { topic: {} };
  // article_id accessible on props here
  render() {
    console.log(this.props.topic_slug);
    return <h2>Single Topic: {this.props.topic_slug} ! </h2>;
  }
}

export { SingleTopic };
