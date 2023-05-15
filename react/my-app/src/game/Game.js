import { useState } from 'react';
import styled from 'styled-components';

const Score = styled.span`
    color: ${props => props.isRed ? 'red' : 'black'}
`;

export const Game = ({ name }) => {
    const [points, setPoints] = useState(0);

    const increase = () => {
        setPoints(points + 5);
    }

    const decrease = () => {
        setPoints(points - 5);
    }

    return <>
        <h2>Witaj w grzę {name}!</h2>
        <h2>Twoja liczba punków to: <Score isRed={points < 0}>{points}</Score>!</h2>
        <div>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    </>
}