import React, { useState } from 'react';

import './App.css';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = (e) => {
    setShowPassword(!showPassword);

    e.preventDefault();
  }

  return (
    <div className="container">
      <input
        type="text"
        value={username}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <h2>{username}</h2>
      <h2>{showPassword ? password : '*'.repeat(password.length)}</h2>
      <button onClick={handleClick}>Show Password</button>
    </div>
  );
}

export default App;