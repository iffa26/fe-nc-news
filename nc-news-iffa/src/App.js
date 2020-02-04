import React from "react";
import "./App.css";
import { Router } from "@reach/router";

import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { SingleArticle } from "./components/SingleArticle";
import { ArticlesList } from "./components/ArticlesList";
import { TopicsList } from "./components/TopicsList";

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
