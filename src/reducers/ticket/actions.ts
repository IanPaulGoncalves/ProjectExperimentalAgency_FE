import { getTicketsResult } from '../../services/ticketService';

export const GET_TICKET_SUCESS = '@ticket/LOGIN_SUCESS';

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
