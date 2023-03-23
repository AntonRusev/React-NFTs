import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";

export const Profile = () => {
    const { userId, accessToken, username, userEmail, isAuthenticated } = useContext(AuthContext);

    return (
        <>
        <h2> Profile Page</h2>
        {isAuthenticated &&
        <div>
            <h3>{username}</h3>
            <h4>{userEmail}</h4>
        </div>}
        </>
    );
}