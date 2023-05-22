import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

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

    useEffect(() => {
        if (points >= 50) {
            alert(`Gratulację wygrałeś w grę ${name}!`);
            setPoints(0);
        }
    }, [points, name]);

    return <>
        <h2>Witaj w grzę {name}!</h2>
        <h2>Twoja liczba punków to: <Score isRed={points < 0}>{points}</Score>!</h2>
        <ButtonGroup>
            <Button onClick={increase}>+</Button>
            <Button onClick={decrease} variant="danger">-</Button>
        </ButtonGroup>
    </>
}