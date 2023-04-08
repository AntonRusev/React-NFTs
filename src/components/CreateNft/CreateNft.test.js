import { BrowserRouter } from "react-router-dom";

import { render, screen, waitFor } from "@testing-library/react";

import { AuthProvider } from "../../contexts/AuthContext";
import { NftProvider } from "../../contexts/NftContext";
import { ModalProvider } from "../../contexts/ModalContext";

import {CreateNft} from './CreateNft';


describe('CreateNFT Component', () => {
    test('Click on disabled Create link', async () => {
        global.window = { location: { pathname: null } };

        render(
            <BrowserRouter>
                <ModalProvider>
                    <AuthProvider>
                        <NftProvider>
                            <CreateNft />
                        </NftProvider>
                    </AuthProvider>
                </ModalProvider>
            </BrowserRouter>
        );

        waitFor(() => expect(screen.getByText('Add')).toBeDisabled());
    });
});