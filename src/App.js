import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import { SingleArticle } from "./components/PagesAndSections/SingleArticle";
import { TopicsList } from "./components/Lists/TopicsList";
import { ErrorPage } from "./components/PagesAndSections/ErrorPage";
import { NavBar } from "./components/PagesAndSections/NavBar";
import { Homepage } from "./components/PagesAndSections/Homepage";
import { ArticlesPage } from "./components/PagesAndSections/ArticlesPage";
import { ArticlesByTopicPage } from "./components/PagesAndSections/ArticlesByTopicsPage";

class App extends React.Component {
  state = { userLoggedIn: "jessjelly" };

  render() {
    const { userLoggedIn } = this.state;
    return (
      <div className="App">
        <NavBar userLoggedIn={userLoggedIn} loginLogout={this.loginLogout} />
        <Router>
          <Homepage path="/" />
          <ArticlesPage path="/articles" />
          <SingleArticle
            path="/article/:article_id"
            userLoggedIn={userLoggedIn}
          />
          <TopicsList path="/topics" />
          <ArticlesByTopicPage path="/articles/topic/:topic_slug" />
          <ErrorPage default />
        </Router>
      </div>
    );
  }

  loginLogout = (updateUserTo) => {
    if (updateUserTo) {
      this.setState({ userLoggedIn: updateUserTo });
    } else {
      this.setState({ userLoggedIn: null });
    }
  };
}

export default App;
