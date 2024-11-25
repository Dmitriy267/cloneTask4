import React, { useContext } from 'react';
import { ResultContext } from '../ResultContextGlass/ResultContextGlass';
import BlockResultDiv from '../BlockResultDiv/BlockResultDiv';
const BlockResultGame = () => {
    let maxGass = sessionStorage.getItem('maxGlass');
    return (
        <>
            <h3>Время закончилось!</h3>
            <ResultContext.Provider value={maxGass}>
                <BlockResultDiv />
            </ResultContext.Provider>
        </>
    );
};
export default BlockResultGame;
