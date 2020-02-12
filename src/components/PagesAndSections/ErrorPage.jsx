import React from "react";

function ErrorPage(props) {
  if (props.err) {
    const { status } = props.err.response;

    return (
      <section>
        <h2 className="errorMessage">error</h2>
        <h3 className="errorStatus">
          status:
          {status}
        </h3>
      </section>
    );
  } else
    return (
      <section>
        <h2 className="errorMessage">error</h2>
        <h3 className="errorStatus">status: 404 Page Not Found</h3>
      </section>
    );
}

export { ErrorPage };
