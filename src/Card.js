import React, { Component } from 'react';

class Card extends Component {

  render() {
    return (
      <div className={this.props.class} onClick={this.props.flipCard}>
        <div>{this.props.side}</div>
      </div>
    );
  }

}

export default Card;
