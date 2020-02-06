import React from "react";

function SortByButtons(props) {
  const { sortArticles } = props;
  return (
    <section>
      Sort by:
      <button id="comment_count" onClick={sortArticles}>
        comments
      </button>
      <button id="created_at" onClick={sortArticles}>
        date
      </button>
      <button id="votes" onClick={sortArticles}>
        votes
      </button>
    </section>
  );
}

export { SortByButtons };
