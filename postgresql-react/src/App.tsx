import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Register from './components/register&login/Register';
import Login from './components/register&login/Login';
import Main from './components/main/Main';
import AboutUs from './components/aboutUs/AboutUs';
import NavigationBar from './components/navbar/Navbar';
import './App.css';
import ConnectUs from './components/connectUs/ConnectUs';
import PurchaseProduct from './components/buying/Buying';
import RequestProductForm from './components/fillForm/FillForm';

function App() {
  const isLoggedIn = localStorage.getItem('user') !== null;

  return (
    <Router>
      <div className="app">
        <NavigationBar />
        <Container className="mt-4">
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/main" element={<Main />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/connectus" element={<ConnectUs />} />
            <Route path="/buy" element={<PurchaseProduct />} />
            <Route path="/fillForm" element={<RequestProductForm />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
