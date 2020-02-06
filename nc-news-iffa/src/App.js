import React from "react";
import "./App.css";
import { Router } from "@reach/router";

import { Header } from "./components/PagesAndSections/Header";
import { NavBar } from "./components/PagesAndSections/NavBar";
import { SingleArticle } from "./components/PagesAndSections/SingleArticle";
import { ArticlesList } from "./components/Lists/ArticlesList";
import { TopicsList } from "./components/Lists/TopicsList";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Router>
        <ArticlesList path="/" />
        <ArticlesList path="/articles" />
        <SingleArticle path="/article/:article_id" />
        <TopicsList path="/topics" />
        <ArticlesList path="/articles/topic/:topic_slug" />
      </Router>
    </div>
  );
}

export default App;
