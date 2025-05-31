import { configureStore } from '@reduxjs/toolkit';
import { authUserReducer } from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import usersReducers from './users/reducer';
import talksReducer from './talks/reducer';
import talkDetailReducer from './talkDetail/reducer';
import { loadingBarReducer } from 'react-redux-loading-bar';

/**
 * @TODO: Create Redux store
 */
const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducers,
    talks: talksReducer,
    talkDetail: talkDetailReducer,
    loadingBar: loadingBarReducer,
  },
});
export { store };
