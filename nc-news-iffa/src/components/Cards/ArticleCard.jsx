import React from "react";
import { Link } from "@reach/router";

function ArticleCard(props) {
  const { article } = props;
  return (
    <li key={article.article_id}>
      <Link to={`/article/${article.article_id}`}>
        <h3>{article.title}</h3>
      </Link>
      <Link to={`/articles/topic/${article.topic}`}>
        <h4>{article.topic}</h4>
      </Link>
      <h4> {article.comment_count} comments</h4>
      <h4> {article.votes} votes</h4>
      <h4> {article.created_at} </h4>
    </li>
  );
}

export { ArticleCard };
