import React, { Component } from 'react';
import './App.css';

import Card from './Card';

import atom from './assets/imgs/atom.png';
import cloud from './assets/imgs/cloud.png';
import heart from './assets/imgs/like.png';
import moon from './assets/imgs/moon-phase-outline.png';
import pawprint from './assets/imgs/pawprint.png';
import star from './assets/imgs/star.png';
import sun from './assets/imgs/sun.png';

class App extends Component {

  state = {
    cards: {
      1: {
        face: 1,
        flipped: false,
        frontImage: atom,
        backImage: cloud,
      },
      2: {
        face: 2,
        flipped: false,
        frontImage: atom,
        backImage: cloud,
      },
      3: {
        face: 3,
        flipped: false,
        frontImage: atom,
        backImage: heart,
      },
      4: {
        face: 4,
        flipped: false,
        frontImage: atom,
        backImage: heart,
      },
      5: {
        face: 5,
        flipped: false,
        frontImage: atom,
        backImage: moon,
      },
      6: {
        face: 6,
        flipped: false,
        frontImage: atom,
        backImage: moon,
      },
      7: {
        face: 7,
        flipped: false,
        frontImage: atom,
        backImage: pawprint,
      },
      8: {
        face: 8,
        flipped: false,
        frontImage: atom,
        backImage: pawprint,
      },
      9: {
        face: 9,
        flipped: false,
        frontImage: atom,
        backImage: star,
      },
      10: {
        face: 10,
        flipped: false,
        frontImage: atom,
        backImage: star,
      },
      11: {
        face: 11,
        flipped: false,
        frontImage: atom,
        backImage: sun,
      },
      12: {
        face: 12,
        flipped: false,
        frontImage: atom,
        backImage: sun,
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
              frontImage={cards[card].frontImage}
              backImage={cards[card].backImage}
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
