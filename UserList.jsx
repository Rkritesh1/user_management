import { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
        .then((res) => res.json())
        .then((data) => {
            console.log("Fetched Users:", data); // Debugging
            setUsers(Array.isArray(data) ? data : []); // Ensure it's an array
        })
        .catch((error) => console.error("Error fetching users:", error));
}, [])

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;  // ✅ Add this line to fix the error
