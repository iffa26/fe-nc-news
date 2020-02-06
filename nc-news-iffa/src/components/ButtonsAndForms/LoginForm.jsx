import React from "react";

class LoginForm extends React.Component {
  state = {};
  render() {
    const { userLoggedIn } = this.props;
    if (userLoggedIn)
      return (
        <section>
          Hello {userLoggedIn}!
          <button onClick={this.handleClick} value={null}>
            Logout?
          </button>
        </section>
      );
    return (
      <form>
        <select name="cars">
          <option value="jessjelly">jessjelly</option>
        </select>
        <button onClick={this.handleClick} value="jessjelly">
          Login!
        </button>
      </form>
    );
  }

  handleClick = event => {
    event.preventDefault();
    console.log("handle click", event.target.value);
    this.props.loginLogout(event.target.value);
  };
}

export { LoginForm };

// function on click - update state in app - login/logout
// fucntion should be defined in app and passed on props
