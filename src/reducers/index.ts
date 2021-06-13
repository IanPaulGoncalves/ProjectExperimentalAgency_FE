import { combineReducers } from 'redux';
import accountReducer from './account/reducer';
import postReducer from './post/reducer';
import ticketReducer from './ticket/reducer';

const rootReducer = combineReducers({
  account: accountReducer,
  post: postReducer,
  ticket: ticketReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
