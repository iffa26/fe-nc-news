import React from "react";
import { Link } from "@reach/router";
import { Header } from "./Header";
import { LoginForm } from "../ButtonsAndForms/LoginForm";

function NavBar(props) {
  return (
    <nav>
      <section className="navHeader">
        <Header />
      </section>
      <section className="navLinksList">
        <ul>
          <li>
            <Link className="navLinksListItem" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navLinksListItem" to="/topics">
              Topics
            </Link>
          </li>
          <li>
            <Link className="navLinksListItem" to="/articles">
              Articles
            </Link>
          </li>
        </ul>
      </section>
      <section className="navLoginForm">
        <LoginForm
          userLoggedIn={props.userLoggedIn}
          loginLogout={props.loginLogout}
        />
      </section>
    </nav>
  );
}

export { NavBar };
