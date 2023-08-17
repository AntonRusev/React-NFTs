import { BrowserRouter } from "react-router-dom";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { NftProvider } from "../../contexts/NftContext";
import { AuthProvider } from "../../contexts/AuthContext";
import { ModalProvider } from "../../contexts/ModalContext";

import { Home } from "./Home";

describe('Home Component', () => {
    test('Click on Explore link', async () => {
        global.window ??= { location: { pathname: null } };

        render(
            <ModalProvider>
                <BrowserRouter>
                    <AuthProvider>
                        <NftProvider>
                            <Home />
                        </NftProvider>
                    </AuthProvider>
                </BrowserRouter>
            </ModalProvider>
        );

        await userEvent.click(screen.queryByText('Explore'));

        waitFor(() => expect(global.window.location.pathname).toContain(`/gallery`));
    });
});