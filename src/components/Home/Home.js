import useFirebase from 'components/hooks/useFirebase'
import React from 'react'

const Home = () => {
  const {user} = useFirebase();
  return (
    <div>
      <p>Author: Rafath Bin Zafar Auvee</p>
      <h2>Home Page</h2>
      <p>Welcome : {user? user.displayName : "Guest User"}</p>
    </div>
  )
}

export default Home