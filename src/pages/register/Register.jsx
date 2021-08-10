import "./register.css"

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Vleisbook</h3>
          <span className="loginDesc">Quick and easy way to connect with your friends and family.</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="text" name="username" className="loginInput" placeholder="Username" />
            <input type="email" name="email" className="loginInput" placeholder="Email" />
            <input type="password" name="password" className="loginInput" placeholder="Password" />
            <input type="password" name="passwordConfirmation" className="loginInput" placeholder="Confirm Password" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">Log into Your Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}
