import React, { Component } from 'react';
import axios from 'axios';
import xml2jsPromise from '../../helpers/xml2jsPromise';
import './addGame.scss';
import store from '../../store';


class AddGame extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.submit = this.submit.bind(this);
    // this.getGameData = this.getGameData.bind(this);
  }
  render() {
    return (
      <div className="add-game">
        <form onSubmit={this.submit}>
          <input type="text" value={this.state.text} onChange={e => this.handleChange(e)}/>
          <button>Add Game</button>
        </form>
      </div>
    );
  }

  handleChange(e){
    this.setState({text: e.target.value});
  };

  // getGameData(name){
  //   axios.get(`https://www.boardgamegeek.com/xmlapi2/search?query=${this.state.text}&exact=1&type=boardgame`).then(res => {
  //     xml2jsPromise(res.data).then(data => {
  //       axios.get(`https://www.boardgamegeek.com/xmlapi2/thing?id=${data.items.item[0].$.id}`).then(res => {
  //         xml2jsPromise(res.data).then(data => {
  //           this.setState({gameDataLoaded: true});
  //           this.setState({gameData: data.items.item[0]});
  //           console.log(this.state.gameData)
  //         });
  //       });
  //     });
  //   });
  // };

  submit(e) {
    e.preventDefault();
    if(!this.state.text.length){
      return;
    }

    let id = 0;
    if (this.props.games.length) {
      id = this.props.games[this.props.games.length - 1].id + 1;
    }

    store.dispatch({type: 'ADD_GAME', payload: {id , name: this.state.text}});
    this.setState({text: ''})
  };
}

export default AddGame;
