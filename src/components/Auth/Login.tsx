import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import FormInput from "../Shared/FormInput";
import Button from "../Shared/Button";
import ErrorDisplay from "../Shared/ErrorDisplay";

const Login: React.FC = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async () => {
        const result = await login(email, password);

        if (result) {
            navigate("/weather");
        } else {
            setError("Invalid credentials.");
        }
    };

    const navigateToRegister = () => {
        navigate("/register");
    };

    return (
        <div>
            <h2>Login</h2>
            <FormInput
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
            />
            <Button onClick={handleLogin} text="Login" />
            {error && <ErrorDisplay message={error} />}
            <p>
                Don't have an account?{" "}
                <button onClick={navigateToRegister}>Register</button>
            </p>
        </div>
    );
};

export default Login;
