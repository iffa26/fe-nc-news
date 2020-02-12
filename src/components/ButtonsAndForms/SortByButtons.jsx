import React from "react";

function SortByButtons(props) {
  const { sortArticles, sort_by_selected, sort_by_direction } = props;
  return (
    <section>
      Sort by:&nbsp;
      <button id="created_at" onClick={sortArticles}>
        {sort_by_selected === "created_at" &&
          sort_by_direction === "desc" &&
          "date ↓"}
        {sort_by_selected === "created_at" &&
          sort_by_direction === "asc" &&
          "date ↑"}
        {sort_by_selected !== "created_at" && "date   "}
      </button>
      <button id="comment_count" onClick={sortArticles}>
        {sort_by_selected === "comment_count" &&
          sort_by_direction === "asc" &&
          "comments ↓"}
        {sort_by_selected === "comment_count" &&
          sort_by_direction === "desc" &&
          "comments ↑"}
        {sort_by_selected !== "comment_count" && "comments   "}
      </button>
      <button id="votes" onClick={sortArticles}>
        {sort_by_selected === "votes" &&
          sort_by_direction === "asc" &&
          "votes ↓"}
        {sort_by_selected === "votes" &&
          sort_by_direction === "desc" &&
          "votes ↑"}
        {sort_by_selected !== "votes" && "votes   "}
      </button>
    </section>
  );
}

export { SortByButtons };
