import React, { useEffect, useState } from 'react';
import { TimeProps } from '../../types/Time/Time';

const Time: React.FC<TimeProps> = () => {
    const [counter, setCounter] = useState<number>(80);

    useEffect(() => {
        let timer = 0;

        if (counter > 0) {
            timer = setInterval(() => setCounter(counter - 1), 1000);
        }

        return () => clearInterval(timer);
    }, [counter]);

    return (
        <div>
            <div>
                <p>Игра закончится через: {counter} секунд</p>
            </div>
        </div>
    );
};
export default Time;
