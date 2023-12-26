import React from 'react';
import './modal.css';

const Modal = ({ show, onClose, children }) => {
    if (!show) {
        return null;
    }

    const handleBackdropClick = (e) => {
        if (e.target.classList.contains('modal-backdrop')) {
            onClose();
        }
    };

    return (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="modal">
                {children}
                <button onClick={onClose}>Fermer</button>
            </div>
        </div>
    );
};

export default Modal;
