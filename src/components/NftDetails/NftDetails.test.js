import { BrowserRouter } from "react-router-dom";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { AuthProvider } from "../../contexts/AuthContext";
import { NftProvider } from "../../contexts/NftContext";
import { ModalProvider } from "../../contexts/ModalContext";

import { NftDetails } from "./NftDetails";


describe('NftDetails Component', () => {
    test('Show nftName', () => {
        const nftName = 'nftName';

        render(
            <BrowserRouter>
                <ModalProvider>
                    <NftProvider>
                        <AuthProvider>
                            <NftDetails _id={'id'} nftName={nftName} />
                        </AuthProvider>
                    </NftProvider>
                </ModalProvider>
            </BrowserRouter>
        );

        waitFor(() => expect(screen.getByText(nftName)).toBeInTheDocument());
    });

    test('Show price', () => {
        const price = 'price';

        render(
            <BrowserRouter>
                <ModalProvider>
                    <NftProvider>
                        <AuthProvider>
                            <NftDetails _id={'id'} price={price} />
                        </AuthProvider>
                    </NftProvider>
                </ModalProvider>
            </BrowserRouter>
        );

        waitFor(() => expect(screen.getByText(price)).toBeInTheDocument());
    });

    test('Click on Edit link', async () => {
        global.window = { location: { pathname: null } };

        const itemId = 'testId';

        render(
            <BrowserRouter>
                <ModalProvider>
                    <NftProvider>
                        <AuthProvider>
                            <NftDetails _id={itemId} />
                        </AuthProvider>
                    </NftProvider>
                </ModalProvider>
            </BrowserRouter>
        );

        await userEvent.click(screen.queryByText('Back'));

        waitFor(() => expect(global.window.location.pathname).toContain(`/gallery/${itemId}/edit`));
    });


    test('Click on Back link', async () => {
        global.window = { location: { pathname: null } };

        const itemId = 'testId';

        render(
            <BrowserRouter>
                <ModalProvider>
                    <NftProvider>
                        <AuthProvider>
                            <NftDetails _id={itemId} />
                        </AuthProvider>
                    </NftProvider>
                </ModalProvider>
            </BrowserRouter>
        );

        await userEvent.click(screen.queryByText('Back'));

        waitFor(() => expect(global.window.location.pathname).toContain(`/gallery`));
    });
});