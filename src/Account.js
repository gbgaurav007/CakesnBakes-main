import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import './Account.css'; 

const Account = ({ onLogin, onLogout }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    let storedUser = localStorage.getItem('user');
    storedUser = storedUser ? JSON.parse(storedUser) : {};
    console.log(storedUser);
    if (storedUser.username === username && storedUser.password === password) {
      onLogin(storedUser.username);
      setUsername('');
      setPassword('');
      alert('Login successful');
    } 
    else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    onLogout();
    setUsername('');
    setPassword('');
    alert('Logout successful');
  };

  const handleSignup = () => {
    const user = {
      username,
      password,
    };
    localStorage.setItem('user', JSON.stringify(user));
    onLogin(username);
    setUsername('');
    setPassword('');
    alert('Signup successful');
  };

  return (
    <div id="account" className="account">
      <div className="down"><Image src="ac.jpg" className="account-image" /></div>
      <div className="up">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br/>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br/>
      {isLogin ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <button onClick={handleSignup}>Sign Up</button>
      )}
      <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Create an account' : 'Already have an account?'}
      </p>
      <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Account;
