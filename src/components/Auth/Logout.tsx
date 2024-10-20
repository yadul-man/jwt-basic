import React from "react";
import { useAuth } from "../../hooks/useAuth";

const Logout: React.FC = () => {
    const { logout } = useAuth();

    return <button onClick={logout}>Logout</button>;
};

export default Logout;
