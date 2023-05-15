import { useState } from 'react';

export const Game = ({ name }) => {
    const [points, setPoints] = useState(0);

    return <>
        <h2>Witaj w grzę {name}!</h2>
        <h2>Twoja liczba punków to: {points}!</h2>
        <div>
            <button>+</button>
            <button>-</button>
        </div>
    </>
}