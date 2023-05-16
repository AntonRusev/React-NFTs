import { BrowserRouter } from "react-router-dom";

import { render, screen, waitFor } from "@testing-library/react";

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
});