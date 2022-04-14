// import useFirebase from 'components/hooks/useFirebase'
import app from 'firebase.init';
import { getAuth } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

const auth = getAuth(app);

const Home = () => {
  // const {user} = useFirebase();
  const [user] = useAuthState(auth)
  return (
    <div>
      <p>Author: Rafath Bin Zafar Auvee</p>
      <h2>Home Page</h2>
      <p>Welcome : {user? user.displayName : "Guest User"}</p>
    </div>
  )
}

export default Home