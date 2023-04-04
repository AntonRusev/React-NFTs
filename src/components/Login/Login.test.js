import { BrowserRouter } from "react-router-dom";

import { render, screen, waitFor } from "@testing-library/react";

import { AuthProvider } from "../../contexts/AuthContext";
import { ModalProvider } from "../../contexts/ModalContext";

import { Login } from "./Login";


describe('Login Component', () => {
    test('Click on disabled Login link', async () => {
        global.window = { location: { pathname: null } };

        render(
            <BrowserRouter>
                <ModalProvider>
                    <AuthProvider>
                        <Login />
                    </AuthProvider>
                </ModalProvider>
            </BrowserRouter>
        );

        waitFor(() => expect(screen.getByText('Login')).toBeDisabled());
    });
});