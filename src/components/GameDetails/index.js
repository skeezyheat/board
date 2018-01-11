import React, { Component } from 'react';
import './gameDetails.scss';

class GameDetails extends Component {
  render(){
    return(
      <div className="game-details">
        <img className="game-image" src={this.props.gameData.image[0]} />
        <p>{this.props.gameData.description}</p>
      </div>
    )
  }
}

export default GameDetails;
