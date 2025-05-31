import api from '../../utils/api';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

/**
 * @TODO: Define all the actions (creator) for the users state
 */
const ActionType = {
  RECEIVE_USER: 'RECEIVE_USER',
};
function recevieUserActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USER,
    payload: {
      users,
    },
  };
}
function asyncRegister({ id, password, name }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await api.register({ id, name, password });
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}
export { ActionType, asyncRegister, recevieUserActionCreator };
