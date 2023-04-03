import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({
    children
}) => {
    const [modal, setModal] = useState('');

    const onModalActivate = (data) => {
        setModal(data);
    };

    const onModalClose = () => {
        setModal('');
    };

    const modalContextValue = {
        onModalActivate,
        onModalClose,
        modal
    };

    return (
        <>
            <ModalContext.Provider value={modalContextValue}>
                {children}
            </ModalContext.Provider>
        </>
    );

};