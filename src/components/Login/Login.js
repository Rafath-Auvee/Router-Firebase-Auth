import app from "firebase.init";
import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const auth = getAuth(app)

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <div>
      {/* <span>Hello! {user?.displayName && user.displayName}</span> */}
      {/* <br />
      <br /> */}
      Login
      <div className="" style={{margin: '20px'}}>
        <button onClick={ () => signInWithGoogle()} >
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
