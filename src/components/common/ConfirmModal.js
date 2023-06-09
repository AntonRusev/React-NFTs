import { useContext } from 'react';

import { ModalContext } from '../../contexts/ModalContext';
import { NftContext } from '../../contexts/NftContext';

import './Modals.css';

export const ConfirmModal = () => {
    const { modalData, onModalClose } = useContext(ModalContext);
    const { onDeleteConfirm } = useContext(NftContext);

    const onConfirm = () => {
        onModalClose();

        onDeleteConfirm(modalData.text);
    };

    return (
        <div onClick={onModalClose} className="overlay">
            <div onClick={(e) => e.stopPropagation()} className={`modal-container-${modalData.type} modal-container`}>

                <p className={modalData.type === "orange" ? 'orange' : 'hidden'}>
                    <i className="fa-solid fa-triangle-exclamation"></i>
                </p>

                <h3>Are you sure that you want to delete this NFT?</h3>

                <div className='btns-holder'>
                    <button onClick={onConfirm}>DELETE</button>
                    <button onClick={onModalClose}>CANCEL</button>
                </div>

            </div>
        </div>
    );
};