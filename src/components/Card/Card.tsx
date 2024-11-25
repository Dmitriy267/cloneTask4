import React from 'react';
import { CardProps } from '../../types/Card/Card';
import '../../sass/Card/Card.scss';
import shirt from '../../assets/image/imgCards.jpg';
const Card: React.FC<CardProps> = ({
    card,
    isFlip,
    onClick,
    index,
    isActive,
}: CardProps) => {
    const handeClick = () => {
        !isFlip && onClick(index);
    };
    return (
        <>
            <div
                className={`wrapper-card__div ${isFlip ? 'flipped' : ''} ${isActive ? 'isActive' : ''}`}
                onClick={handeClick}
            >
                <div className="card__div card__div_shirt">
                    <img src={shirt} alt="Рубашка карточки" />
                </div>
                <div className="card__div card__div_fase">
                    <img src={card.url} alt="Изображение" />
                </div>
            </div>
        </>
    );
};

export default Card;
