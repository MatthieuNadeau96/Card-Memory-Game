import React, { Component } from 'react';

class Card extends Component {

  render() {
    return (
      <div className="card" onClick={this.props.flipCard}>
        <div>{this.props.side}</div>
      </div>
    );
  }

}

export default Card;
