import { GET_POST, GET_POST_DETAIL } from './actions';

const INITIAL_STATE = {
  post: undefined,
  postFilter: undefined
};

function postReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_POST: {
      return {
        ...state,
        post: action.payload.post
      };
    }
    case GET_POST_DETAIL: {
      return {
        ...state,
        postFilter: action.payload.postFilter
      };
    }
    default: {
      return state;
    }
  }
}

export default postReducer;
