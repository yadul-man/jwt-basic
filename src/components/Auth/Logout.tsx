import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Logout: React.FC = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const logoutAndNavigate = () => {
        logout();
        navigate("/login");
    };

    return <button onClick={logoutAndNavigate}>Logout</button>;
};

export default Logout;
