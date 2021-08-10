import "./login.css"

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Vleisbook</h3>
          <span className="loginDesc">Quick and easy way to connect with your friends and family.</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="email" className="loginInput" placeholder="Email" />
            <input type="password" className="loginInput" placeholder="Password" />
            <button className="loginButton">Log in</button>
            <span className="loginForgot">Forgot Password</span>
            <button className="loginRegisterButton">Create a New Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}
