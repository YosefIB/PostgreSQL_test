import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/register&login/Register';
import Login from './components/register&login/Login';
import Main from './components/main/Main';
import './App.css';

function App() {
  // const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/data');
      const data = await response.json();
      // setUsers(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });
      const data = await response.json();
      console.log('Data added:', data);
      fetchData(); // רענון הנתונים
      setName(''); // ניקוי השדות
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>Food X Change</h1>
          <h2>Enterprise Trading Platform</h2>
        </header>

        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
