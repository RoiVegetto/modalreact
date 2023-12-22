import React from 'react';
import './modal.css';

const Modal = ({ show, children, onClose }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-backdrop">
            <div className="modal">
                {children}
                <button onClick={onClose}>Fermer</button>
            </div>
        </div>
    );
};

export default Modal;
