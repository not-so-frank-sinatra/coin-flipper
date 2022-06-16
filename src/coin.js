import React, { Component } from 'react';
import './coin.css';

class Coin extends Component {
    render() {
        return (
            <div className='coin'>
                <img src={`https://tinyurl.com/react-coin-${this.props.face}-jpg`} alt={this.props.face} />
            </div>
        )
    }
}

export default Coin;