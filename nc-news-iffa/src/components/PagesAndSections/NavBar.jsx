import React from "react";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/topics">
        <button>Topics</button>
      </Link>
      <Link to="/articles">
        <button>Articles</button>
      </Link>
      <Link to="/articles/2">
        <button>TEMP Article 2</button>
      </Link>
      You are logged in as:
    </nav>
  );
};

export { NavBar };
