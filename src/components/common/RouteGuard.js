import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { ModalContext } from "../../contexts/ModalContext";

export const GuestRouteGuard = () => {
    const { isAuthenticated } = useContext(AuthContext);
    const { onModalActivate } = useContext(ModalContext);

    if (!isAuthenticated) {
        onModalActivate({ text: 'You need to login to view this page.', type: 'blue' });
        return <Navigate to='/login' />;
    };

    return (
        <Outlet />
    );
};

export const UserRouteGuard = () => {
    const { isAuthenticated } = useContext(AuthContext);
    const { onModalActivate } = useContext(ModalContext);

    if (isAuthenticated) {
        onModalActivate({ text: 'You are already logged in.', type: 'blue' });
        return <Navigate to='/' replace />;
    };

    return (
        <Outlet />
    );
};