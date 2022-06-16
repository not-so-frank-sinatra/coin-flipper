import React, { Component } from 'react';
import Coin from './coin';

class Flipper extends Component {
    constructor() {
        super();
        this.state = { countHeads: 0, countTails: 0, current: '' };
    }
    flip = () => {
        const val = Math.floor(Math.random() * 2) + 1;
        if (val === 1)
            this.setState(curState => ({ current: 'tails', countTails: curState.countTails + 1 }));
        else
            this.setState(curState => ({ current: 'heads', countHeads: curState.countHeads + 1 }));
    }
    render() {
        return (
            <div>
                <h1>Let's Flip a Coin</h1>
                {this.state.current && <Coin face={this.state.current} />}
                <button onClick={this.flip}>Flip Me!</button>
                <p>Out of {this.state.countHeads + this.state.countTails} flips,there have been {this.state.countHeads} heads and {this.state.countTails} tails.</p>
            </div>
        );
    }
}

export default Flipper;