import { BrowserRouter } from "react-router-dom";

import { render, screen, waitFor } from "@testing-library/react";

import { AuthProvider } from "../../contexts/AuthContext";
import { ModalProvider } from "../../contexts/ModalContext";

import { Register } from "./Register";


describe('Register Component', () => {
    test('Click on disabled Register link', async () => {
        global.window = { location: { pathname: null } };

        render(
            <BrowserRouter>
                <ModalProvider>
                    <AuthProvider>
                        <Register />
                    </AuthProvider>
                </ModalProvider>
            </BrowserRouter>
        );

        waitFor(() => expect(screen.getByText('Register')).toBeDisabled());
    });
});