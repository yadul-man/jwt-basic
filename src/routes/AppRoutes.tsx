import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import { WeatherForecast } from "../components/WeatherForecast/WeatherForecast";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? element : <Navigate to="/login" />;
};

export const AppRoutes = () => {
    const { isAuthenticated } = useAuth();
    return (
        <Routes>
            <Route
                path="/login"
                element={
                    !isAuthenticated ? <Login /> : <Navigate to="/weather" />
                }
            />
            <Route
                path="/register"
                element={
                    !isAuthenticated ? <Register /> : <Navigate to="/weather" />
                }
            />
            <Route
                path="/weather"
                element={<ProtectedRoute element={<WeatherForecast />} />}
            />
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};
