import { BrowserRouter } from "react-router-dom";

import { render, screen, waitFor } from "@testing-library/react";

import { AuthProvider } from "../../../contexts/AuthContext";
import { NftProvider } from "../../../contexts/NftContext";
import { ModalProvider } from "../../../contexts/ModalContext";

import { AddComment } from "./AddComment";

describe('AddComment Component', () => {
    test('Click on disabled Add link', async () => {
        global.window ??= { location: { pathname: null } };

        render(
            <BrowserRouter>
                <ModalProvider>
                    <AuthProvider>
                        <NftProvider>
                            <AddComment />
                        </NftProvider>
                    </AuthProvider>
                </ModalProvider>
            </BrowserRouter>
        );

        waitFor(() => expect(screen.getByText('Add')).toBeDisabled());
    });

    test('Show Add new comment:', () => {
        render(
            <ModalProvider>
                <BrowserRouter>
                    <AuthProvider>
                        <NftProvider>
                            <AddComment />
                        </NftProvider>
                    </AuthProvider>
                </BrowserRouter>
            </ModalProvider>
        );

        waitFor(() => expect(screen.getByText("Add new comment:")).toBeInTheDocument());
    });
});