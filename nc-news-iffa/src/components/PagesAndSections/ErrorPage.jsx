import React from "react";

function ErrorPage(props) {
  const { status, data } = props.err.response;

  return (
    <section>
      error!
      <p>status:</p>
      {status} {data.msg}
      <p></p>
    </section>
  );
}

export { ErrorPage };
