import React, { useEffect, useState } from 'react';
import api from './api'; // Your configured Axios instance

function UserDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/users'); // Calls /api/users
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error.response?.data || error.message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}