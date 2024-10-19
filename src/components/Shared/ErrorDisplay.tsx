import React from "react";

interface ErrorDisplayProps {
    message: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
    return <p>{message}</p>;
};

export default ErrorDisplay;
