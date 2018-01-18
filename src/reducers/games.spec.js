import reducer from './games';

describe('Game Reducer', () => {
  test('returns a state object', () => {
    let result = reducer(undefined, {type: 'whatevs'});
    expect(result).toBeDefined();
  });

  test('adds a game', () => {
    let startState = {
      games: []
    }

    let expectedState = {
      games: [
        {
          id: 1,
          name: 'gloomhaven'
        }
      ]
    }

    let action = {
      type: 'ADD_GAME',
      payload: {
        id: 1,
        name: 'gloomhaven'
      }
    };

    let result = reducer(startState, action);

    expect(result).toEqual(expectedState);
  });

  test('deletes a game', () => {
    let startState = {
      games: [
        {id: 1, name: 'gloomhaven'}
      ]
    };

    let expectedState = {
      games: []
    };

    let action = {
      type: 'DELETE_GAME',
      payload: {id: 1}
    };

    let result = reducer(startState, action);

    expect(result).toEqual(expectedState);
  });
})
