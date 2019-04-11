import React, { Component } from 'react';

class Card extends Component {

  render() {
    return (
      <div className={this.props.class} onClick={this.props.clicked}>
        <div>{this.props.face}</div>
      </div>
    );
  }

}

export default Card;
