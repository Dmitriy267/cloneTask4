import React, { useEffect, useState } from 'react';
import { GamingProps } from '../../types/Gaming/Gaming';
import { Link } from 'react-router-dom';
import '../../sass/Gaming/Gaming.scss';
import BlockTimeCards from '../BlockTimeCards/BlockTimeCards';
import BlockResultGame from '../BlockResultGame/BlockResultGame';

export const Gaming: React.FC<GamingProps> = ({ cats }: GamingProps) => {
    const [counter, setCounter] = useState<number>(80);

    useEffect(() => {
        let timer = 0;

        if (counter > 0) {
            timer = setInterval(() => setCounter(counter - 1), 1000);
        }

        return () => clearInterval(timer);
    }, [counter]);

    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/Главная">Настройки</Link>
                        </li>
                        <li>
                            <Link to="/Результат">Результат</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <main className="main">
                {counter === 0 ? (
                    <BlockResultGame />
                ) : (
                    <BlockTimeCards counter={counter} cats={cats} />
                )}
            </main>
        </>
    );
};
