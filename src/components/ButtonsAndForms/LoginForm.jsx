import React from "react";

class LoginForm extends React.Component {
  state = {};
  render() {
    const { userLoggedIn } = this.props;
    if (userLoggedIn)
      return (
        <section className="loginForm-text">
          Hello {userLoggedIn}!&nbsp;
          <button
            onClick={() => {
              this.props.loginLogout(null);
            }}
            className="loginForm-logoutButton"
          >
            Logout?
          </button>
        </section>
      );
    return (
      <form>
        <select className="loginForm-dropdown">
          <option value="jessjelly">jessjelly</option>
        </select>
        <button
          onClick={() => {
            this.props.loginLogout("jessjelly");
          }}
          className="loginForm-loginButton"
        >
          Login!
        </button>
      </form>
    );
  }

  handleClick = event => {
    event.preventDefault();
    this.props.loginLogout(event.target.value);
  };
}

export { LoginForm };
