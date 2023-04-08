import { BrowserRouter } from "react-router-dom";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { AuthProvider } from "../../contexts/AuthContext";
import { ModalProvider } from "../../contexts/ModalContext";

import { Header } from "./Header";

describe('Header Component', () => {
    test('Show Home Nav link', () => {
        render(
            <ModalProvider>
                <BrowserRouter>
                    <AuthProvider>
                        <Header />
                    </AuthProvider>
                </BrowserRouter>
            </ModalProvider>
        );

        waitFor(() => expect(screen.getByText("Home")).toBeInTheDocument());
    });

    test('Click on Gallery link', async () => {
        global.window = { location: { pathname: null } };

        render(
            <ModalProvider>
                <BrowserRouter>
                    <AuthProvider>
                            <Header />
                    </AuthProvider>
                </BrowserRouter>
            </ModalProvider>
        );

        await userEvent.click(screen.queryByText('GALLERY'));

        waitFor(() => expect(global.window.location.pathname).toContain(`/gallery`));
    });

    test('Click on Home link', async () => {
        global.window = { location: { pathname: null } };

        render(
            <ModalProvider>
                <BrowserRouter>
                    <AuthProvider>
                            <Header />
                    </AuthProvider>
                </BrowserRouter>
            </ModalProvider>
        );

        await userEvent.click(screen.queryByText('HOME'));

        waitFor(() => expect(global.window.location.pathname).toContain(`/`));
    });

    test('Click on Login link', async () => {
        global.window = { location: { pathname: null } };

        render(
            <ModalProvider>
                <BrowserRouter>
                    <AuthProvider>
                            <Header />
                    </AuthProvider>
                </BrowserRouter>
            </ModalProvider>
        );

        await userEvent.click(screen.queryByText('LOGIN'));

        waitFor(() => expect(global.window.location.pathname).toContain(`/login`));
    });

    test('Click on Register link', async () => {
        global.window = { location: { pathname: null } };

        render(
            <ModalProvider>
                <BrowserRouter>
                    <AuthProvider>
                            <Header />
                    </AuthProvider>
                </BrowserRouter>
            </ModalProvider>
        );

        await userEvent.click(screen.queryByText('REGISTER'));

        waitFor(() => expect(global.window.location.pathname).toContain(`/register`));
    });
});