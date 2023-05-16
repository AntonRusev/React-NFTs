import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";

export const Profile = () => {
    const { username, userEmail, isAuthenticated } = useContext(AuthContext);

    return (
        <main id="main">
            <div className="hero">
                <div className="profile">
                    <h1 className="profile-title">Profile Page</h1>

                    <h2 className="profile-secondary">of</h2>

                    {isAuthenticated &&
                        <div>
                            <h3 className="profile-secondary">{username}</h3>
                            <h4 className="profile-secondary">{userEmail}</h4>
                        </div>}
                </div>
            </div>
        </main>
    );
};