import React from "react";
import useFirebase from '../../components/hooks/useFirebase.js'


const Login = () => {
  const {signInWithGoogle} = useFirebase();
  return (
    <div>
      Login
      <div className="" style={{margin: '20px'}}>
        <button onClick={signInWithGoogle} >
            Google Sign In
        </button>
      </div>
      <form action="">
        <input type="email" name="" id="" placeholder="Your Email" />
        <br />
        <input type="password" name="" id="" placeholder="Your Password" />
        <br />
        <input type="submit" value="Login" />
        <br />
      </form>
    </div>
  );
};

export default Login;
