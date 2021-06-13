import { GET_TICKET_SUCESS, GET_SEARCH_TICKET_SUCESS, RESET_TICKET } from './actions';

const INITIAL_STATE = {
  tickets: undefined,
  ticketsFilter: undefined
};

function ticketReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_TICKET_SUCESS: {
      return {
        ...state,
        tickets: action.payload.getTickets
      };
    }
    case GET_SEARCH_TICKET_SUCESS: {
      debugger;
      return {
        ...state,
        tickets: INITIAL_STATE.tickets,
        ticketsFilter: action.payload.getTickets
      };
    }
    // case RESET_TICKET: {
    //   return {
    //     tickets: INITIAL_STATE.tickets
    //   };
    // }
    default: {
      return state;
    }
  }
}

export default ticketReducer;
