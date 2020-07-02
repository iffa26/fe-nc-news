import React from "react";

function ErrorPage(props) {
  if (props.err) {
    const { status } = props.err.response;

    return (
      <section>
        <h3 className="errorMessage">error</h3>
        <p className="errorStatus">
          status:
          {status}
        </p>
      </section>
    );
  } else
    return (
      <section>
        <h3 className="errorMessage">error</h3>
        <p className="errorStatus">status: 404 Page Not Found</p>
      </section>
    );
}

export { ErrorPage };
