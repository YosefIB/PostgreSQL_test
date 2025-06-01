import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Button, Navbar, Nav } from 'react-bootstrap';
import './Main.css';

interface User {
    firstName: string;
    lastName: string;
    email: string;
}

const Main: React.FC = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const userStr = localStorage.getItem('user');
        if (!userStr) {
            navigate('/login');
            return;
        }
        setUser(JSON.parse(userStr));
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <>
           <Container>
                <Card>
                    <Card.Body>
                        <Card.Title className="mb-4">
                            Welcome, {user?.firstName}!
                        </Card.Title>
                        <Card.Text>
                            You are now logged into the Food X Change system.
                            This is your main dashboard where you can manage your trading activities.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default Main;
