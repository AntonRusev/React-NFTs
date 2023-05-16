import { createContext, useEffect, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({
    children
}) => {
    const [modalData, setModalData] = useState({});
    const [isModalActive, setIsModalActive] = useState(false);

    useEffect(() => {
        if (Object.keys(modalData).length !== 0) {
            setIsModalActive(true);
        } else {
            setIsModalActive(false);
        };
    }, [modalData]);

    const onModalActivate = (data) => {
        setModalData(data);
    };

    const onModalClose = () => {
        setModalData({});
    };

    const modalContextValue = {
        onModalActivate,
        onModalClose,
        modalData,
        isModalActive
    };

    return (
        <>
            <ModalContext.Provider value={modalContextValue}>
                {children}
            </ModalContext.Provider>
        </>
    );
};