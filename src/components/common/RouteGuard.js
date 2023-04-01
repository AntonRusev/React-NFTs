import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

// TODO add a modal saying "You are already logged in" and "You need to login to view that page" with link to the Login page

// replace - overrides the guarded path in the history and keeps the one the app is navigating to

export const GuestRouteGuard = () => {
    const { isAuthenticated } = useContext(AuthContext);

        if (!isAuthenticated) {
        return <Navigate to='/login' />
        }

    return (
        <Outlet />
    );
};

export const UserRouteGuard = () => {
    const { isAuthenticated } = useContext(AuthContext);

        if (isAuthenticated) {
        return <Navigate to='/' replace />
        }

    return (
        <Outlet />
    );
};