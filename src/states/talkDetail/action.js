/**
 * @TODO: Define all the actions (creator) for the talkDetail state
 */

import api from '../../utils/api';

const ActionType = {
  RECEIVE_TALK_DETAIL: 'RECEIVE_TALK_DETAIL',
  CLEAR_TALK_DETAIL: 'CLEAR_TALK_DETAIL',
  TOGGLE_LIKE_TALK_DETAIL: 'TOGGLE_LIKE_TALK_DETAIL',
};

function receiveTalkDetail(talkDetail) {
  return {
    type: ActionType.RECEIVE_TALK_DETAIL,
    payload: {
      talkDetail,
    },
  };
}
function clearTalkDetail() {
  return {
    type: ActionType.CLEAR_TALK_DETAIL,
  };
}

function toggleTalkDetail(userId) {
  return {
    type: ActionType.TOGGLE_LIKE_TALK_DETAIL,
    payload: {
      userId,
    },
  };
}
function asyncReceiveTalkDetail(talkId) {
  return async (disptch) => {
    disptch(clearTalkDetail());
    try {
      const talkDetail = await api.getTalkDetail(talkId);
      disptch(receiveTalkDetail(talkDetail));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncToggleLikeDetail() {
  return async (dispatch, getState) => {
    const { authUser, talkDetail } = getState();
    dispatch(toggleTalkDetail(authUser.id));
    try {
      await api.toggleLikeTalk(talkDetail.id);
    } catch (error) {
      alert(error.message);
    }
  };
}
export {
  ActionType,
  receiveTalkDetail,
  clearTalkDetail,
  toggleTalkDetail,
  asyncReceiveTalkDetail,
  asyncToggleLikeDetail,
};
