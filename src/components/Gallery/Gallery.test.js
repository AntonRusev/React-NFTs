import { BrowserRouter } from "react-router-dom";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { NftProvider } from "../../contexts/NftContext";
import { AuthProvider } from "../../contexts/AuthContext";
import { ModalProvider } from "../../contexts/ModalContext";

import { Gallery } from "./Gallery";


describe('Gallery Component', () => {
    test('Click on Login link', async () => {
        global.window ??= { location: { pathname: null } };

        render(
            <ModalProvider>
                <BrowserRouter>
                    <AuthProvider>
                        <NftProvider>
                            <Gallery />
                        </NftProvider>
                    </AuthProvider>
                </BrowserRouter>
            </ModalProvider>
        );

        await userEvent.click(screen.queryByText('Login'));

        waitFor(() => expect(global.window.location.pathname).toContain(`/login`));
    });
});