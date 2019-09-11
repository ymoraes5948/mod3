import {createStore} from 'redux';

const INITIAL_STATE = ['fazer café', 'estudar react native'];

function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'ADD_TODO') {
    return [...state, action.text];
  }

  return state;
}

const store = createStore(reducer);

export default store;