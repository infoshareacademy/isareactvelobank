import React from "react";
import styled from 'styled-components';

const Score = styled.span`
    color: ${props => props.isRed ? 'red' : 'black'}
`;

export class GameClass extends React.Component {
    state = {
        points: 0
    }

    increase = () => {
        this.setState({ points: this.state.points + 5 })
    }

    decrease = () => {
        this.setState({ points: this.state.points - 5 })
    }

    componentDidUpdate() {
        if (this.state.points >= 50) {
            alert(`Gratulację wygrałeś w grę ${this.props.name}!`);
            this.setState({ points: 0 })
        }
    }

    render() {
        return <>
            <h2>Witaj w grzę {this.props.name}!</h2>
            <h2>Twoja liczba punków to: 
                <Score isRed={this.state.points < 0}>
                    {this.state.points}
                </Score>!
            </h2>
            <div>
                <button onClick={this.increase}>+</button>
                <button onClick={this.decrease}>-</button>
            </div>
        </>
    }
}