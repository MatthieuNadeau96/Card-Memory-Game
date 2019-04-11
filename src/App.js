import React, { Component } from 'react';
import './App.css';

import Card from './Card';

class App extends Component {

  state = {
    cards: {
      1: {
        face: 1,
        flipped: false,
      },
      2: {
        face: 2,
        flipped: false,
      },
      3: {
        face: 3,
        flipped: false,
      },
      4: {
        face: 4,
        flipped: false,
      },
      5: {
        face: 5,
        flipped: false,
      },
      6: {
        face: 6,
        flipped: false,
      },
      7: {
        face: 7,
        flipped: false,
      },
      8: {
        face: 8,
        flipped: false,
      },
      9: {
        face: 9,
        flipped: false,
      },
      10: {
        face: 10,
        flipped: false,
      },
      11: {
        face: 11,
        flipped: false,
      },
      12: {
        face: 12,
        flipped: false,
      },
    },
  }

  flipCard = (card) => {
    const cards = {...this.state.cards}
    cards[card].flipped = true
    this.setState(({
      cards
    }))
  }

  render() {
    const {cards} = this.state
    return (
      <div className="game-container">
        {Object.keys(cards).map((card, index) => {
          return (
            <Card
              key={index}
              face={cards[card].face}
              clicked={() => this.flipCard(card)}
              class={this.state.cards[card].flipped ? 'card flipped' : 'card'}
            />
          )
        })}
      </div>
    );
  }
}

export default App;
