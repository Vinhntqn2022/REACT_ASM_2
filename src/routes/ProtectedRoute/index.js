import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "../../Context";

const ProtectedRoute = ({ children }) => {
    const { token } = useAuth();
    const location = useLocation();
    if (!token) {
        return <Navigate to="/" replace state={{from: location}} />
    } else return children
}
export { ProtectedRoute }
