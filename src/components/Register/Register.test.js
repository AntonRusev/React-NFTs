import { BrowserRouter } from "react-router-dom";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

    test('Show Join us title', () => {
        render(
            <ModalProvider>
                <BrowserRouter>
                    <AuthProvider>
                        <Register />
                    </AuthProvider>
                </BrowserRouter>
            </ModalProvider>
        );

        waitFor(() => expect(screen.getByText("Join us")).toBeInTheDocument());
    });

    test('Click on Login link', async () => {
        global.window = { location: { pathname: null } };

        render(
            <ModalProvider>
                <BrowserRouter>
                    <AuthProvider>
                        <Register />
                    </AuthProvider>
                </BrowserRouter>
            </ModalProvider>
        );

        await userEvent.click(screen.queryByText('Login'));

        waitFor(() => expect(global.window.location.pathname).toContain(`/login`));
    });
});