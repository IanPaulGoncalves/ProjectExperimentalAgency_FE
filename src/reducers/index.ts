import { combineReducers } from 'redux';
import accountReducer from './account/reducer';
import ticketReducer from './ticket/reducer';

const rootReducer = combineReducers({
  account: accountReducer,
  ticket: ticketReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
