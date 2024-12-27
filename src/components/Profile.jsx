import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  // conditional return

//   if (!user) {
//     return <div>Please Login</div>;
//   } else {
//     return <div>Welcome {user.username}</div>;
//   }
    return !user ?  <div>Login</div> :<div>Welcome {user.username}</div> 
}

export default Profile;
