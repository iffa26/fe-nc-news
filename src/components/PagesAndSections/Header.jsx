import React from "react";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <section>
      <Link to="/" className="MainHeader-title">
        <h1>NC News</h1>{" "}
      </Link>
    </section>
  );
};

export { Header };
