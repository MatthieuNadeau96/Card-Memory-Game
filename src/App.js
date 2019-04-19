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
    this.checkForMatch()
  }

  flipCard = (card) => {
    const cards = {...this.state.cards}
    // flips the current card over
    cards[card].flipped = true

    if(!this.state.hasFlippedCard) {
      // if there isn't a card already flipped over, set this card to the firstCard
      this.setState({
        firstCard: cards[card],
        hasFlippedCard: true,
      })
      return
    }
    // set this card as the secondCard
    this.setState({
      hasFlippedCard: false, //potential issue with the flip spam bug
      secondCard: cards[card],
    })
  }

  checkForMatch = () => {
    const { firstCard, secondCard } = this.state
    // first make sure there are cards to compare
    if (this.state.firstCard !== null && this.state.secondCard !== null) {
      const isMatch = firstCard.symbol === secondCard.symbol
      // check if cards match
      isMatch ? this.disableCards() : this.unFlipCards()
    }
  }

  disableCards = () => {
    // cards do match
    const { firstCard, secondCard, cards } = this.state
    // keeps the cards facing up
    cards[firstCard.face].matchingPair = true
    cards[secondCard.face].matchingPair = true
    this.setState({
      firstCard: null,
      secondCard: null,
    })
  }

  unFlipCards = () => {
    // cards don't match
    const { firstCard, secondCard, cards } = this.state
    setTimeout(() => {
      // flips the cards back over
      cards[firstCard.face].flipped = false
      cards[secondCard.face].flipped = false
      this.setState({
        firstCard: null,
        secondCard: null,
      })
    }, 800)
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
              class={this.state.cards[card].flipped ? 'card flipped' : 'card anim'}
            />
          )
        })}
      </div>
    );
  }
}

export default App;
