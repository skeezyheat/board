import React, { Component } from 'react';
import axios from 'axios';
import xml2jsPromise from '../../helpers/xml2jsPromise';
import './gameList.scss';
import FontAwesome from 'react-fontawesome';

import store from '../../store';


class GameListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(){
    return(
      <li>
        <span>{this.props.name}</span>
        <i onClick={() => {this.removeItem(this.props.id)}}>
          <FontAwesome name="times" className="delete-item-icon"/>
        </i>
      </li>
    )
  }

  removeItem(id) {
    store.dispatch({type: 'DELETE_GAME', payload: id});
  }
}

class GameListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <ul>
        {
          this.props.games.map(game => {
            return <GameListItem {...game} key={game.id} />
          })
        }
      </ul>
    )
  }
}

class GameList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let thingToRender = null;

    if (this.props.games.length) {
      thingToRender = <GameListContainer games={this.props.games} />;
    }
    else{
      thingToRender = <p>No games have been added to your list yet</p>;
    }

    return (
      <div className="game-list">
        {thingToRender}
      </div>
    );
  }
}

export default GameList;
