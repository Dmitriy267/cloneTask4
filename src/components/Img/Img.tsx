import React from 'react';
import { ImgProps } from '../../types/Img/Img';

export const Img: React.FC<ImgProps> = ({ url }: ImgProps) => {
    return <img src={card.url} alt="Изображение" />;
};
