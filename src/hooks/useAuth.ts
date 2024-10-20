import { useState } from "react";
import AuthService from "../services/AuthService";
import { AuthResponse } from "../models/AuthResponse";

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
        !!AuthService.getToken()
    );

    const login = async (email: string, password: string) => {
        const result: AuthResponse | null = await AuthService.login(
            email,
            password
        );
        if (result && result.token) {
            setIsAuthenticated(true);
            return true;
        } else {
            return false;
        }
    };

    const register = async (name: string, email: string, password: string) => {
        const result: AuthResponse | null = await AuthService.register(
            name,
            email,
            password
        );
        return result;
    };

    const logout = () => {
        AuthService.logout();
        setIsAuthenticated(false);
    };

    return { isAuthenticated, login, register, logout };
};
