import { BrowserRouter } from "react-router-dom";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { GalleryItem } from "./GalleryItem";


describe('GalleryItem Component', () => {
    test('Show nftName', () => {
        const nftName = 'nftName';

        render(
            <BrowserRouter>
                <GalleryItem _id={'id'} nftName={nftName} />
            </BrowserRouter>
        );

        waitFor(() => expect(screen.getByText(nftName)).toBeInTheDocument());
    });

    test('Show description', () => {
        const description = 'description';

        render(
            <BrowserRouter>
                <GalleryItem _id={'id'} description={description} />
            </BrowserRouter>
        );

        waitFor(() => expect(screen.getByText(description)).toBeInTheDocument());
    });

    // test('Click on Details link', async () => {
    //     global.window = { location: { pathname: null } };

    //     const itemId = 'testId';

    //     render(
    //         <BrowserRouter>
    //             <GalleryItem _id={itemId} />
    //         </BrowserRouter>
    //     );

    //     await userEvent.click(screen.queryByText('Details'));

    //     waitFor(() => expect(global.window.location.pathname).toContain(`/gallery/${itemId}`));
    // });
});