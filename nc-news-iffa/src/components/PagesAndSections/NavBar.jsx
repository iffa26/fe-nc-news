import React from "react";
import { Link } from "@reach/router";

function NavBar() {
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
    </nav>
  );
}

export { NavBar };
