import React, { useRef } from 'react'
import { auth } from '../firebase';

// import { Link } from 'react-router-dom'
function SignIn() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signUp = (e) =>{
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value,
      )
      .then(authUser => {
        console.log(authUser);
      })
      .catch(error => {
        alert(error.message);
      });
  }
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(authUser => {
        console.log(authUser);
      })
      .catch(error => alert(error.message));
  }
  return (
    <div className="signin">
      <h1>Sigin-In</h1>
      <form>
        <input
          ref={emailRef}
          type="email"
          placeholder="Email" 
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password" 
        />
        <button 
          type="submit"
          onClick={signIn}
        >
          Signin
        </button>
        <p>Or</p>
        <button 
          type="submit"
          onClick={signUp}
        >
          Signup
        </button>
        {/* <p>New to Netflix? <Link to="signup">Signup</Link></p> */}
        {/* <p>New to Netflix? <span onClick={signUp} className="signin-span">Signup</span></p> */}
      </form>
    </div>
  )
}

export default SignIn
