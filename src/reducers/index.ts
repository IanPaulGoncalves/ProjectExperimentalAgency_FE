import { combineReducers } from 'redux';
import accountReducer from './account/reducer';
import postReducer from './post/reducer';

const rootReducer = combineReducers({ account: accountReducer, post: postReducer });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
