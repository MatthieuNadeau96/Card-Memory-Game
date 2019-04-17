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
        symbol: 'cloud',
        matchingPair: false,
      },
      2: {
        face: 2,
        flipped: false,
        frontImage: atom,
        backImage: cloud,
        symbol: 'cloud',
        matchingPair: false,
      },
      3: {
        face: 3,
        flipped: false,
        frontImage: atom,
        backImage: heart,
        symbol: 'heart',
        matchingPair: false,
      },
      4: {
        face: 4,
        flipped: false,
        frontImage: atom,
        backImage: heart,
        symbol: 'heart',
        matchingPair: false,
      },
      5: {
        face: 5,
        flipped: false,
        frontImage: atom,
        backImage: moon,
        symbol: 'moon',
        matchingPair: false,
      },
      6: {
        face: 6,
        flipped: false,
        frontImage: atom,
        backImage: moon,
        symbol: 'moon',
        matchingPair: false,
      },
      7: {
        face: 7,
        flipped: false,
        frontImage: atom,
        backImage: pawprint,
        symbol: 'pawprint',
        matchingPair: false,
      },
      8: {
        face: 8,
        flipped: false,
        frontImage: atom,
        backImage: pawprint,
        symbol: 'pawprint',
        matchingPair: false,
      },
      9: {
        face: 9,
        flipped: false,
        frontImage: atom,
        backImage: star,
        symbol: 'star',
        matchingPair: false,
      },
      10: {
        face: 10,
        flipped: false,
        frontImage: atom,
        backImage: star,
        symbol: 'star',
        matchingPair: false,
      },
      11: {
        face: 11,
        flipped: false,
        frontImage: atom,
        backImage: sun,
        symbol: 'sun',
        matchingPair: false,
      },
      12: {
        face: 12,
        flipped: false,
        frontImage: atom,
        backImage: sun,
        symbol: 'sun',
        matchingPair: false,
      },
    },
    hasFlippedCard: false,
    firstCard: null,
    secondCard: null,
  }

  componentDidUpdate() {

    const firstCard = {...this.state.firstCard}
    const secondCard = {...this.state.secondCard}
    const cards = {...this.state.cards}

    if (this.state.firstCard !== null && this.state.secondCard !== null) {
      if (firstCard.symbol === secondCard.symbol) {
        console.log('match')
        cards[firstCard.face].matchingPair = true
        cards[secondCard.face].matchingPair = true
        // it's a match
        this.setState({
          firstCard: null,
          secondCard: null,
        })
      } else if (firstCard.symbol === secondCard.symbol) {
        // it's not a match
        cards[firstCard.face].flipped = false
        cards[secondCard.face].flipped = false
        this.setState({
          firstCard,
          secondCard,
          cards,
        })
      }
    }

  }

  flipCard = (card) => {
    const cards = {...this.state.cards}
    cards[card].flipped = true
    this.setState(({
      cards
    }))

    if(!this.state.hasFlippedCard) {
      this.setState({
        hasFlippedCard: true,
        firstCard: cards[card],
      })
    } else {
      this.setState({
        hasFlippedCard: false,
        secondCard: cards[card],
      })
    }


  }

  render() {
    const {cards} = this.state
    return (
      <div className="game-container">
        {Object.keys(cards).map((card, index) => {
          const clickHandler = this.state.cards[card].matchingPair ? null : () => this.flipCard(card)

          return (
            <Card
              key={index}
              face={cards[card].face}
              frontImage={cards[card].frontImage}
              backImage={cards[card].backImage}
              clicked={clickHandler}
              class={this.state.cards[card].flipped ? 'card flipped' : 'card'}
            />
          )
        })}
      </div>
    );
  }
}

export default App;
