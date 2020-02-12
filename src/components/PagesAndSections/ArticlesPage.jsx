import React from "react";
import { ArticlesList } from "../Lists/ArticlesList";

const ArticlesPage = () => {
  return (
    <section>
      <h2 className="ArticlesPage-title">Top Articles</h2>
      <ArticlesList />
    </section>
  );
};

export { ArticlesPage };
