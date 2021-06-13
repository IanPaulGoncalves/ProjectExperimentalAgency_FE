import { GET_TICKET_SUCESS } from './actions';

const INITIAL_STATE = {
  tickets: undefined
};

function ticketReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_TICKET_SUCESS: {
      return {
        ...state,
        tickets: action.payload.getTickets
      };
    }
    default: {
      return state;
    }
  }
}

export default ticketReducer;
