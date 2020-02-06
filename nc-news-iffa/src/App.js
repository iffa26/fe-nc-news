import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import { Header } from "./components/PagesAndSections/Header";
import { NavBar } from "./components/PagesAndSections/NavBar";
import { SingleArticle } from "./components/PagesAndSections/SingleArticle";
import { ArticlesList } from "./components/Lists/ArticlesList";
import { TopicsList } from "./components/Lists/TopicsList";
import { ErrorPage } from "./components/PagesAndSections/ErrorPage";
import { LoginForm } from "./components/ButtonsAndForms/LoginForm";

class App extends React.Component {
  state = { userLoggedIn: "jessjelly" };

  render() {
    const { userLoggedIn } = this.state;
    return (
      <div>
        <Header />
        <NavBar />
        <LoginForm userLoggedIn={userLoggedIn} loginLogout={this.loginLogout} />
        <Router>
          <ArticlesList path="/" />
          <ArticlesList path="/articles" />
          <SingleArticle
            path="/article/:article_id"
            userLoggedIn={userLoggedIn}
          />
          <TopicsList path="/topics" />
          <ArticlesList path="/articles/topic/:topic_slug" />
          <ErrorPage default />
        </Router>
      </div>
    );
  }

  loginLogout = updateUserTo => {
    if (updateUserTo) {
      this.setState({ userLoggedIn: updateUserTo });
    } else {
      this.setState({ userLoggedIn: null });
    }
  };
}

export default App;
