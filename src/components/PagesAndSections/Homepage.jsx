import React from "react";

const Homepage = () => {
  return (
    <main>
      <h3 className="welcome">Welcome to Iffa's NC NEWS!</h3>
      <p>
        This is an example Reddit-inspired news site which includes articles by
        users, comments and ratings.
        <br></br>The news articles featured on this site are not real!
      </p>
      <br></br>
      <br></br>
      <h4> Overview of tech used</h4>
      <p>
        Backend: RESTful API created using Node.js, Express.js, PostgreSQL, and
        Knex, with full TDD (Chai + Supertest).
        <br></br>
        Frontend: Reat.js with HTML and CSS
      </p>
    </main>
  );
};

export { Homepage };
