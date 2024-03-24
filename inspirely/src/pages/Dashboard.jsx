import React from "react";
import '../dash.css';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  //retreives users information
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  //funtion to signout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <h1>Welcome to Inspirely</h1>
      <h2>{user && user.email}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
};
export default Dashboard;

