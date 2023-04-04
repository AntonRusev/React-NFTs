import { BrowserRouter } from "react-router-dom";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { NftProvider } from "../../contexts/NftContext";

import { Gallery } from "./Gallery";


describe('Gallery Component', () => {
    test('Click on Create link', async () => {
        global.window = { location: { pathname: null } };

        render(
            <BrowserRouter>
                <NftProvider>
                    <Gallery />
                </NftProvider>
            </BrowserRouter>
        );

        await userEvent.click(screen.queryByText('Add your own NFT'));

        waitFor(() => expect(global.window.location.pathname).toContain(`/create`));
    });
});