import {
  getTicketsResult,
  getSearchTicketsResult
} from '../../services/ticketService';

export const GET_TICKET_SUCESS = '@ticket/LOGIN_SUCESS';
export const RESET_TICKET = '@ticket/RESET_TICKET';
export const GET_SEARCH_TICKET_SUCESS = '@ticket/GET_SEARCH_TICKET_SUCESS';

export function getTicketsAction() {
  return async (dispatch: any) => {
    const getTickets = await getTicketsResult();
    dispatch({
      type: GET_TICKET_SUCESS,
      payload: {
        getTickets
      }
    });
  };
}

export function getSearchTicketsAction(startCity: string, endCity: string) {
  return async (dispatch: any) => {
    const getTickets = await getSearchTicketsResult(startCity, endCity);
    dispatch({
      type: GET_SEARCH_TICKET_SUCESS,
      payload: {
        getTickets
      }
    });
  };
}

// export function resetTicketsAction() {
//   return (dispatch: any) => {
//     dispatch({
//       type: RESET_TICKET,
//       payload: {}
//     });
//   };
// }
