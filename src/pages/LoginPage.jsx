function LoginPage() {
  return (
    <div className="container">
      <div className="col-8 authContent">
        <p className="subtitle1">Welcome Back</p>
        <h3>Log in to Write It</h3>

        <div className="authForm">
          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </form>

          <button className="buttonPrimaryBlue largeButton">Log In</button>
          <p>Or</p>
          <button className="buttonSecondaryBlue largeButton">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
