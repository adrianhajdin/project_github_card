import React, { useState } from 'react';

const SearchProfile = ({ fetchProfile }) => {
  const [ username, setUsername ] = useState('');

  const handleSubmit = (e) => {
    fetchProfile(username);

    e.preventDefault();
  }

  return (
    <div className="search--box">
      <form onSubmit={handleSubmit}>
        <input 
          type="search" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Type Username + Enter"
        />
      </form>
    </div>
  );
}
  
export default SearchProfile;