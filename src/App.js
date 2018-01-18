import React, { Component } from 'react';
import './styles/styles.scss'

import AddGame from './components/AddGame';
import GameList from './components/GameList';
import GameDetails from './components/GameDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <AddGame games={this.props.games}/>
        <GameList games={this.props.games}/>
        {/* {this.state.gameData && <GameDetails gameData={this.state.gameData}/>} */}
      </div>
    );
  }
}

export default App;
