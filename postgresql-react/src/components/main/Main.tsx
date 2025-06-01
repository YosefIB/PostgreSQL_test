import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

    return (
        <div className="main-container">
            <h1>Welcome, {user?.firstName}!</h1>
            <div className="content">
                <p>You are now logged into the Food X Change system.</p>
                {/* Add your main content here */}
            </div>
        </div>
    );
};

export default Main;
