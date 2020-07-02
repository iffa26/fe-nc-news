import React from "react";
import { ArticlesList } from "../Lists/ArticlesList";

const ArticlesPage = () => {
  return (
    <section>
      <h3 className="ArticlesPage-title">Top Articles</h3>
      <ArticlesList />
    </section>
  );
};

export { ArticlesPage };
