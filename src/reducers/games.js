const initState = {
  games: []
}

export default (state = initState, action) => {
  if(action.type === 'ADD_GAME') {
    return {...state, games: state.games.concat(action.payload)};
  }

  if(action.type === 'DELETE_GAME') {
    state.games.forEach( (game, index) => {
      if (game.id === action.payload.id){
        state.games.splice(index, 1);
      }
    })
  }

  return state;
}
