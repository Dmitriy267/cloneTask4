import React, { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../sass/GamesResult/GamesResult.scss';
const GamesResult = () => {
    const navigate = useNavigate();
    const nandeClick = () => {
        return navigate('/');
    };
    let date = localStorage.getItem('date');
    let time = localStorage.getItem('time');
    let maxGlass = sessionStorage.getItem('maxGlass');
    let error = localStorage.getItem('error');
    let arrDate = [];
    // arrDate.push(date);

    const obj = {};
    obj['dateName'] = date;
    obj['time'] = time;
    arrDate.push(obj);
    console.log(`arrDate`, arrDate);
    console.log(`obj`, obj);
    const arrDateId = arrDate.map((item, index) => ({
        id: index + 1,
        ...item,
    }));
    console.log(`arrDateId`, arrDateId);
    const listIdDate = arrDateId.map((item) => (
        <td key={item.id}>
            <p>{item.dateName}</p>
            <p>{item.time}</p>
        </td>
    ));
    return (
        <>
            <h1>Результаты игры</h1>

            <table className="table">
                <thead>
                    <tr>
                        <th>Дата и время</th>
                        <th> Время прохождения</th>
                        <th>Количество ошибок</th>
                        <th>Сложность</th>
                        <th>Счет</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        {listIdDate}
                        <td></td>
                        <td>
                            {' '}
                            <p>{error}</p>
                        </td>
                        <td></td>

                        <td>
                            <p>{maxGlass}</p>
                        </td>
                    </tr>
                </tbody>
            </table>

            <button onClick={nandeClick}>Вернуться на главную страницу</button>
        </>
    );
};
export default GamesResult;
