import { BrowserRouter } from "react-router-dom";

import { render, screen, waitFor } from "@testing-library/react";

import { AuthProvider } from "../../contexts/AuthContext";
import { NftProvider } from "../../contexts/NftContext";
import { ModalProvider } from "../../contexts/ModalContext";

import { EditNft } from "./EditNft";


describe('Edit Component', () => {
    test('Click on disabled Edit link', async () => {
        global.window = { location: { pathname: null } };

        render(
            <BrowserRouter>
                <ModalProvider>
                    <AuthProvider>
                        <NftProvider>
                            <EditNft />
                        </NftProvider>
                    </AuthProvider>
                </ModalProvider>
            </BrowserRouter>
        );

        waitFor(() => expect(screen.getByText('Save')).toBeDisabled());
    });
});