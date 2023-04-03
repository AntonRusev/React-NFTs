import { useContext } from 'react';

import { ModalContext } from '../../contexts/ModalContext';

export const AlertModal = () => {
    const { modal, onModalClose } = useContext(ModalContext);

    return (
        <div onClick={onModalClose} className="overlay">
            <div onClick={(e) => e.stopPropagation()} className="modal-container">
                <button onClick={onModalClose}><i className="fa-regular fa-circle-xmark"></i></button>
                <h3>{modal}</h3>
                <button onClick={onModalClose}>OK</button>
            </div>
        </div>
    );
};