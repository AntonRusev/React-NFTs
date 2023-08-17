import { BrowserRouter } from "react-router-dom";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { AuthProvider } from "../../contexts/AuthContext";
import { ModalProvider } from "../../contexts/ModalContext";

import { Login } from "./Login";


describe('Login Component', () => {
    test('Click on disabled Login link', async () => {
        global.window ??= { location: { pathname: null } };

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

    test('Show Welcome back title', () => {
        render(
            <ModalProvider>
                <BrowserRouter>
                    <AuthProvider>
                        <Login />
                    </AuthProvider>
                </BrowserRouter>
            </ModalProvider>
        );

        waitFor(() => expect(screen.getByText("Welcome back")).toBeInTheDocument());
    });

    test('Click on Register link', async () => {
        global.window ??= { location: { pathname: null } };

        render(
            <ModalProvider>
                <BrowserRouter>
                    <AuthProvider>
                        <Login />
                    </AuthProvider>
                </BrowserRouter>
            </ModalProvider>
        );

        await userEvent.click(screen.queryByText('Register'));

        waitFor(() => expect(global.window.location.pathname).toContain(`/register`));
    });
});