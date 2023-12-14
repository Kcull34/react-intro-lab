import './App.css';
import React, { useState } from 'react';
import Greeting from './Greeting.js';
import UserList from './UserList.js';

function App() {
  const [users, setUsers] = useState(["Alice", "Bob", "Charlie"]);
  const [newUserName, setNewUserName] = useState("");
  const handleAddUser = () => {
    setUsers([...users, newUserName]);
    setNewUserName("");
  };
  return (
    <div className="App">
      <Greeting name={newUserName} />
      <UserList users={users} />
      <input
        type="text"
        value={newUserName}
        onChange={(e) => setNewUserName(e.target.value)} />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
}

export default App;