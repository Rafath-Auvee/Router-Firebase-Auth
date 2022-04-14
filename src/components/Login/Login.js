import app from "firebase.init";
import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from "react-router-dom";

const auth = getAuth(app)

const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const from = location?.state?.from?.pathname || '/'
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(()=>{
      navigate(from, {replace: true})
    })
  }
  return (
    <div>
      {/* <span>Hello! {user?.displayName && user.displayName}</span> */}
      {/* <br />
      <br /> */}
      Login
      <div className="" style={{margin: '20px'}}>
        <button onClick={handleGoogleSignIn } >
            Google Sign In
        </button>
      </div>
      
      <form action="">
        <input type="email" name="" id="email" placeholder="Your Email" />
        <br />
        <input type="password" name="" id="password" placeholder="Your Password" />
        <br />
        <input type="submit" value="Login" />
        <br />
      </form>
    </div>
  );
};

export default Login;
