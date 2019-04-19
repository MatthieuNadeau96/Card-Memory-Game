import React, { Component } from 'react';

class Card extends Component {

  render() {
    return (
      <div className={this.props.class} style={this.props.style} onClick={this.props.clicked}>
        <img className="back-face" src={this.props.backImage}/>
        <img className="front-face" src={this.props.frontImage}/>
      </div>
    );
  }

}

export default Card;
