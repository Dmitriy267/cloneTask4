import React from 'react';
import { WrapperDivProps } from '../../types/WrapperDiv/WrapperDiv';

export const WrapperDiv: React.FC<WrapperDivProps> = ({
    children,
}: WrapperDivProps) => {
    return <div>{children}</div>;
};
