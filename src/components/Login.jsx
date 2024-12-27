import React,{useState, useContext} from 'react';
import UserContext from '../context/UserContext';

function Login() {

    const [username,setUsername] = useState('abc');
    const [password, setPassword] = useState('pqr');

    const {user,setUser} = useContext(UserContext);

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username,password});
        console.log("Username :" + user);
    }

  return (

    <div>
        <h2>Login</h2>
        <input 
            type="text"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            placeholder='username'
            id="username" 
        /><br/>
        <input 
            type="text"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder='password'
            id="password" 
        />
        <button onClick = {handleSubmit}>Submit</button>
    </div>
  )
}

export default Login