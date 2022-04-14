import { useState, useEffect } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase.init.js";

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const useFirebase = () => {
  const [user, setUser] = useState({});

  useEffect(() => {}, []);

  const signInWithGoogle = () => {
    console.log("Signing in soon");
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return {
    user,
    signInWithGoogle,
  };
  //return [user, setUser];
};

export default useFirebase;
