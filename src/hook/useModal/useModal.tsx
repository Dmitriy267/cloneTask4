import React, { useState } from 'react';

export function useModal() {
    const [isOpen, setisOpen] = useState<boolean>(true);

    const toggle = () => {
        setisOpen(!isOpen);
    };

    return {
        isOpen,
        toggle,
    };
}
