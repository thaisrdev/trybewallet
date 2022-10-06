import { GET_EMAIL } from '../../components/actionTypes';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_EMAIL:
    return { ...state, email: action.payload };
  default:
    return state;
  }
}

export default user;
