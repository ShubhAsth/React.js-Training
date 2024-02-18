import React, { useState } from 'react';

function Hello() {
  const [userName, setUserName] = useState('');
  const [userList, setUserList] = useState([]);

  const handleAddUser = () => {
    if (userName) {
      setUserList([...userList, userName]);
      setUserName('');
    }
  };

  return (
    <div>
      <h1>Hello World</h1>
      <div>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleAddUser}>Add</button>
      </div>
      <div>
        <h2>User List</h2>
        <ul>
          {userList.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Hello;
