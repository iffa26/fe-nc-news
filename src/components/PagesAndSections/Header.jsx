import React from "react";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <section>
      <Link to="/" className="MainHeader-title">
        <h1>
          <p>&nbsp; NC News &nbsp;</p>
        </h1>
      </Link>
    </section>
  );
};

export { Header };
