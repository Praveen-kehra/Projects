import React, { useState } from 'react'
import SignIn from '../components/SignIn';

function Login() {
  const [siginIn, setSiginIn] = useState(false);

  return (
    <div className="login">
      <div className="login-background">
        <img
          className="login-logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button
          className="login-signin-button"
          onClick={() => {setSiginIn(true)}}
        >
          Sigin in
        </button>
        <div className="login-gradient" />
      </div>

      <div className="login-body">
        {siginIn ? (
          <SignIn />
        ) : (
          <>
            <h1>Ultimate films, TV programmes and more.</h1>
            <p>Watch anywhere. Cancel at any time.</p>
            <h4>Ready to watch? Enter your email to create or restart your.</h4>

            <div className="login-input">
              <form>
                <input
                  type="email"
                  placeholder="Email"
                />
                <button
                  onClick={() => setSiginIn(true)}
                  className="login-getStarted-button">
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}

      </div>

    </div>
  )
}

export default Login
