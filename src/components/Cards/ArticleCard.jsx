import React from "react";
import { Link } from "@reach/router";

function ArticleCard(props) {
  const { article } = props;
  return (
    <li key={article.article_id} className="ArticleCard">
      <section className="ArticleCard-title">
        <Link to={`/article/${article.article_id}`}>
          <h3>{article.title}</h3>
        </Link>
        <p>
          by @{article.author} in &nbsp;
          <Link to={`/articles/topic/${article.topic}`}>{article.topic}</Link>
        </p>
      </section>
      <section className="ArticleCard-info">
        <p> {article.comment_count} comments</p>
        <p> {article.votes} votes</p>
        <p> {article.created_at} </p>
      </section>
    </li>
  );
}

export { ArticleCard };
