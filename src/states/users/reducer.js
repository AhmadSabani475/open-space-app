import { ActionType } from './action';

/**
 * @TODO: Define reducer for the users state
 */
function usersReducers(users = [], action = {}) {
  switch (action.type) {
  case ActionType.RECEIVE_USER:
    return action.payload.users;
  default:
    return users;
  }
}
export default usersReducers;
