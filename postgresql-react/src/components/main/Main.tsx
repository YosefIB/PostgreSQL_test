import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Button, Navbar, Nav } from "react-bootstrap";
import NavigationBar from "../navbar/Navbar";
import mainPic from "../../pics/mainPics/mainPic.png";

interface User {
  firstName: string;
  lastName: string;
  email: string;
}

const Main: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (!userStr) {
      navigate("/login");
      return;
    }
    setUser(JSON.parse(userStr));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      <Card.Title className="mb-4">Welcome, {user?.firstName}!</Card.Title>
      <Card.Text className="mb-4">
        This is your main dashboard for Food X Change. Here you can manage your
        trading activities, view your portfolio, and connect with other users.
      </Card.Text>
      <Card.Text>
        You are now logged into the Food X Change system. This is your main
        dashboard where you can manage your trading activities.
      </Card.Text>
      <div className="text-center mt-4">
        <img src={mainPic} alt="Food" className="img-fluid rounded" />
      </div>
    </>
  );
};

export default Main;
