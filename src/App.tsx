import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Gaming } from './components/Gaming/Gaming';
import { useFetch } from './hook/useFetch/useFetch';
import GamesResult from './components/GamesResult/GamesResult';
import './App.scss';
function App() {
    const API_KEY =
        'live_TLj59z02R9MlG0IZXR5HsXCWBf6cm8lnoAaPk84WUW9e7TKBmYK8mrNpgPMeBuiL';

    const fetchData = useFetch(
        ` https://api.thecatapi.com/v1/images/search?limit=8&breed_ids=beng&api_key=${API_KEY}`
    );
    const cats = fetchData.data;

    const loading = fetchData.loading;
    const error = fetchData.error;

    return (
        <>
            {loading && <h1>Загрузка приложения</h1>}
            {error && <p>Ошибка на сервере</p>}
            {cats && (
                <>
                    <Routes>
                        <Route path="/" element={<Gaming cats={cats} />} />
                        {/* <Route path="Настройки" element={<GamesSetting />} /> */}
                        <Route path="Результат" element={<GamesResult />} />
                    </Routes>
                </>
            )}
        </>
    );
}

export default App;
