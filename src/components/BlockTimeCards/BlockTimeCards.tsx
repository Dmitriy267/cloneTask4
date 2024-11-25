import React, { useEffect, useState } from 'react';
import { getDate, getTime } from '../../myFunc/getDate/getDate';
import { BlockTimeCardsProps } from '../../types/BlockTimeCards/BlockTimeCards';
import { ICards } from '../../types/Icards/Icards';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';
import { useModal } from '../../hook/useModal/useModal';
import smilick from '../../assets/image/Smilick.jpg';
type ICardsMatched = {
    card: {
        id: string;
    };
};
const initialState = {
    card: { id: '' },
};

const BlockTimeCards: React.FC<BlockTimeCardsProps> = ({
    counter,
    cats,
}: BlockTimeCardsProps) => {
    const [openCards, setOpenCards] = useState<ICards[]>([]);
    const [matched, setMatched] = useState<ICardsMatched>(initialState);
    const [moves, setMoves] = useState(0);
    const [glass, setGlass] = useState<number>(0);
    const [count, setCount] = useState<number>(0);
    const [numErr, setNumErr] = useState<number>(0);
    const { isOpen, toggle } = useModal();
    const patsCards = [...cats, ...cats];

    const randomCards = (arr: ICards[]) => {
        let length = arr.length;
        while (length !== 0) {
            let randomIndex = Math.floor(Math.random() * length);
            length = length - 1;
            let temp = arr[length];
            arr[length] = arr[randomIndex];
            arr[randomIndex] = temp;
        }
        return arr;
    };

    const [cards, setCards] = useState<ICards[]>([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setCards(randomCards(patsCards));
        }, 1000);
        return () => {
            clearTimeout(timerId);
        };
    }, [cats]);
    const date: Date = new Date();
    const handleClickCard = (index: ICards) => {
        if (openCards.length === 1) {
            setOpenCards((prev) => [...prev, index]);
            setMoves((prev) => prev + 1);
        } else {
            setOpenCards([index]);
            getDate(date);
            getTime(date);
            localStorage.setItem('date', getDate(date));
            localStorage.setItem('time', getTime(date));
            console.log(getDate(date));
        }
    };

    const lavet = () => {
        const [one, two] = openCards;

        if (cards[one].id === cards[two].id) {
            setMatched((prev) => ({ ...prev, [cards[one].id]: true }));
            setOpenCards([]);
            setCount((prev) => prev + 2);
            setGlass((prev) => prev + 5);
            setNumErr((prev) => prev - 1);

            return;
        }
        if (cards[one].id !== cards[two].id) {
            setGlass((prev) => prev - 5);
            setNumErr((prev) => prev + 1);
        }
    };

    const checkFlip = (index) => {
        return openCards.includes(index);
    };
    const checkAktive = (card: ICardsMatched) => {
        return Boolean(matched[card.id]);
    };
    function PercentCount(num: number): number {
        return (num * 100) / patsCards.length;
    }
    useEffect(() => {
        let time;
        if (openCards.length === 2) {
            time = setTimeout(lavet, 700);
        }
        return () => {
            clearTimeout(time);
        };
    }, [openCards]);

    const restartClick = () => {
        setMoves(0);
        setOpenCards([]);
        setMatched({});
        setGlass(0);
        setCount(0);
        setCards(randomCards(patsCards));
    };
    let clock;
    return (
        <>
            {' '}
            <p>Число ходов: {moves}</p>
            <>
                <div>
                    <div>
                        <p>Игра закончится через: {counter} секунд</p>
                    </div>
                </div>
            </>
            <div className="cards__div">
                {cards.map((card, index) => {
                    return (
                        <Card
                            key={index}
                            card={card}
                            isFlip={checkFlip(index)}
                            onClick={handleClickCard}
                            index={index}
                            isActive={checkAktive(card)}
                        />
                    );
                })}
            </div>
            <h4>Kоличество верно открытых пар: {PercentCount(count)} % </h4>
            <h3>Kоличество полученных очков: {glass} </h3>
            {glass && sessionStorage.setItem('maxGlass', glass.toString())}
            {console.log(`numErr`, numErr)}
            {numErr > patsCards.length / 2 &&
                localStorage.setItem('error', numErr.toString())}
            {numErr > patsCards.length / 2 ? (
                <Modal isOpen={isOpen} toggle={toggle}>
                    <h2>Вы проиграли! Слишком много ошибок</h2>
                    <p>
                        {numErr} из {patsCards.length / 2} допустимых
                    </p>
                    <div className="block-images__div">
                        <img src={smilick} alt="Смайлик" />
                    </div>
                </Modal>
            ) : null}
            <button className="restart__button" onClick={restartClick}>
                Начать заново
            </button>
        </>
    );
};

export default BlockTimeCards;
