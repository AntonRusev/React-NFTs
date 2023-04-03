import { useContext } from 'react';

import { ModalContext } from '../../contexts/ModalContext';
import { NftContext } from '../../contexts/NftContext';

import './Modals.css';

export const ConfirmModal = () => {
    const { modal, onModalClose } = useContext(ModalContext);
    const { onDeleteConfirm } = useContext(NftContext);

    const onConfirm = () => {
        onModalClose();

        onDeleteConfirm(modal)
    }

    return (
        <div onClick={onModalClose} className="overlay">
            <div onClick={(e) => e.stopPropagation()} className="modal-container">
                <button onClick={onModalClose}><i className="fa-regular fa-circle-xmark"></i></button>
                <h3>Are you sure that you want to delete this NFT?</h3>
                <button onClick={onConfirm}>DELETE</button>
                <button onClick={onModalClose}>Cancel</button>
            </div>
        </div>
    );
};