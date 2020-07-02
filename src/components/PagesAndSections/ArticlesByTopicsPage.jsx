import React from "react";
import { ArticlesList } from "../Lists/ArticlesList";

const ArticlesByTopicPage = (props) => {
  return (
    <section>
      <h3>{props.topic_slug}</h3>

      <ArticlesList topic_slug={props.topic_slug} />
    </section>
  );
};

export { ArticlesByTopicPage };
