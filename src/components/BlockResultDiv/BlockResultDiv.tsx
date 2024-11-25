import React from 'react';
import { BlockResultDivProps } from '../../types/BlockResultDiv/BlockResultDiv';
import { ResultContext } from '../ResultContextGlass/ResultContextGlass';
const BlockResultDiv = () => {
    return (
        <ResultContext.Consumer>
            {(maxGass: string) => {
                return (
                    <div>
                        <p>Ваш результат в текущей игре: {maxGass} очков</p>
                    </div>
                );
            }}
        </ResultContext.Consumer>
    );
};
export default BlockResultDiv;
