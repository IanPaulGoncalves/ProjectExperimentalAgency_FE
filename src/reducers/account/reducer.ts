import { LOGIN_SUCESS, SILENT_LOGIN } from './actions';

const INITIAL_STATE = {
  user: null
};

function accountReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_SUCESS: {
      return {
        ...state,
        user: action.payload.getUser
      };
    }
    case SILENT_LOGIN: {
      return {
        ...state,
        user: action.payload.getUserAuth
      };
    }
    default: {
      return state;
    }
  }
}

export default accountReducer;
