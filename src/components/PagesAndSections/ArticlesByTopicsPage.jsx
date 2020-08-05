import React from "react";
import { ArticlesList } from "../Lists/ArticlesList";

const ArticlesByTopicPage = (props) => {
  return (
    <section>
      <h2>{props.topic_slug}</h2>

      <ArticlesList topic_slug={props.topic_slug} />
    </section>
  );
};

export { ArticlesByTopicPage };
