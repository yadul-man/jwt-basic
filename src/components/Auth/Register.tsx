import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Button from "../Shared/Button";
import FormInput from "../Shared/FormInput";
import ErrorDisplay from "../Shared/ErrorDisplay";

const Register: React.FC = () => {
    const { register } = useAuth();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);

    const handleRegister = async () => {
        const result = await register(name, email, password);

        if (result?.errors) {
            setError("Registration failed.");
        } else {
            setSuccess(true);
        }
    };

    return success ? (
        <div>
            <h2>Registration Successful</h2>
            <Button onClick={() => navigate("/login")} text="Go to Login" />
        </div>
    ) : (
        <div>
            <h2>Register</h2>
            <FormInput
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <FormInput
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleRegister} text="Register" />
            {error && <ErrorDisplay message="error" />}
        </div>
    );
};

export default Register;
