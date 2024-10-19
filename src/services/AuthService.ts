import axios from "axios";
import { AuthResponse } from "../models/AuthResponse";
import { tokenHelper } from "../utils/tokenHelper";

const API_URL = process.env.REACT_APP_API_BASE_URL + "/api/AuthManagement/";

export default class AuthService {
    // POST method for login which sends the token as the response and stores it in local storage
    static async login(
        email: string,
        password: string
    ): Promise<AuthResponse | null> {
        try {
            const response = await axios.post<AuthResponse>(`${API_URL}Login`, {
                email,
                password,
            });
            this.storeToken(response.data.token);
            return response.data;
        } catch (error) {
            return null;
        }
    }

    // POST method to register a user. Although the response data is not used in particular
    static async register(name: string, email: string, password: string) {
        try {
            const response = await axios.post<AuthResponse>(
                `${API_URL}Register`,
                { name, email, password }
            );
            return response.data;
        } catch (error) {
            return null;
        }
    }

    // Get the token from the local storage
    static getToken(): string | null {
        return tokenHelper.getToken();
    }

    // Store the token in local storage
    static storeToken(token: string) {
        tokenHelper.setToken(token);
    }

    // Set the user as logged out by removing the token from the local storage
    static logout() {
        tokenHelper.removeToken();
    }
}
