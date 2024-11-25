import React from 'react';
export type ModalProps = {
    children?: React.ReactNode;
    isOpen: boolean;
    toggle: () => void;
};
