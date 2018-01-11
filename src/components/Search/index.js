import React, { Component } from 'react';
import axios from 'axios';
import xml2jsPromise from '../../helpers/xml2jsPromise';
import './search.scss';

import GameDetails from '../GameDetails';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      gameDataLoaded: false
    };
    this.submit = this.submit.bind(this);
    this.getGameData = this.getGameData.bind(this)
  }
  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.submit}>
          <input type="text" value={this.state.text} onChange={e => this.handleChange(e)}/>
          <button>Search</button>
        </form>

        {this.state.gameData && <GameDetails gameData={this.state.gameData}/>}
      </div>
    );
  }

  handleChange(e){
    this.setState({text: e.target.value});
  };

  getGameData(name){
    axios.get(`https://www.boardgamegeek.com/xmlapi2/search?query=${this.state.text}&exact=1&type=boardgame`).then(res => {
      xml2jsPromise(res.data).then(data => {
        axios.get(`https://www.boardgamegeek.com/xmlapi2/thing?id=${data.items.item[0].$.id}`).then(res => {
          xml2jsPromise(res.data).then(data => {
            this.setState({gameDataLoaded: true});
            this.setState({gameData: data.items.item[0]});
            console.log(this.state.gameData)
          });
        });
      });
    });
  };

  submit(e) {
    e.preventDefault();
    if(!this.state.text.length){
      return;
    }
    this.getGameData(this.state.text);
  };
}

export default Search;
