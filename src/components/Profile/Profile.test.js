import { BrowserRouter } from "react-router-dom";

import { render, screen, waitFor } from "@testing-library/react";

import { AuthProvider } from "../../contexts/AuthContext";
import { ModalProvider } from "../../contexts/ModalContext";

import { Profile } from './Profile'

describe('Profile Component', () => {
    test('Show Profile Page title', () => {
        render(
            <ModalProvider>
                <BrowserRouter>
                    <AuthProvider>
                        <Profile />
                    </AuthProvider>
                </BrowserRouter>
            </ModalProvider>
        );

        waitFor(() => expect(screen.getByText("Profile Page")).toBeInTheDocument());
    });
});