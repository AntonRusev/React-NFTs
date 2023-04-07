import { useContext } from 'react';

import { ModalContext } from '../../contexts/ModalContext';

export const AlertModal = () => {
    const { modalData, onModalClose } = useContext(ModalContext);

    if (modalData.type !== 'orange') {
        setTimeout(() => {
            onModalClose();
        }, 3000)
    }

    return (
        <div onClick={onModalClose} className="overlay">
            <div onClick={(e) => e.stopPropagation()} className={`modal-container-${modalData.type} modal-container`}>
                <p className={modalData.type === "green" ? 'green' : 'hidden'}>
                    <i className="fa-solid fa-circle-check"></i>
                </p>
                <p className={modalData.type === "red" ? 'red' : 'hidden'}>
                    <i className="fa-solid fa-triangle-exclamation"></i>
                </p>
                <p className={modalData.type === "blue" ? 'blue' : 'hidden'}>
                    <i className="fa-solid fa-circle-info"></i>
                </p>
                <p className='modal-message'>{modalData.text}</p>
            </div>
        </div>
    );
};