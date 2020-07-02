import React from "react";
import { Link } from "@reach/router";
import { Header } from "./Header";
import { LoginForm } from "../ButtonsAndForms/LoginForm";

function NavBar(props) {
  return (
    <nav>
      <ul>
        <li>
          <Header className="navHeader" />
        </li>
        <ul>
          <li>
            <Link to="/" className="navLinks">
              Home
            </Link>
            &nbsp;
          </li>
          <li>
            <Link to="/topics" className="navLinks">
              Topics
            </Link>{" "}
            &nbsp;
          </li>
          <li>
            <Link to="/articles" className="navLinks">
              Articles
            </Link>
          </li>
        </ul>
        <li>
          <LoginForm
            className="navLoginForm"
            userLoggedIn={props.userLoggedIn}
            loginLogout={props.loginLogout}
          />
        </li>
      </ul>
    </nav>
  );
}

export { NavBar };
