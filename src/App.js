import React, { Component } from 'react';
import './App.css';

import Card from './Card';

class App extends Component {

  state = {
    totalCards: [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6],
    activeCard: -1,
  }

  flipCard = (side, i) => {
    this.setState({
      activeCard: i,
    })
    console.log(side + " was flipped")
  }

  render() {
    return (
      <div className="game-container">
        {this.state.totalCards.map((side, index) => {
          return (
            <Card
              key={index}
              side={side}
              flipCard={() => this.flipCard(side, index)}
              class={this.state.activeCard === index ? 'card flipped' : 'card'}
            />
          )
        })}
      </div>
    );
  }
}

export default App;
