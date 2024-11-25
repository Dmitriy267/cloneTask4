import React from 'react';
import { ModalProps } from '../../types/Modal/Modal';
import '../../sass/Modal/Modal.scss';

const Modal: React.FC<ModalProps> = ({
    children,
    toggle,
    isOpen,
}: ModalProps) => {
    return (
        <>
            {isOpen && (
                <div className="modal-wrapper__div" onClick={toggle}>
                    <div
                        className="modal-box__div"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
