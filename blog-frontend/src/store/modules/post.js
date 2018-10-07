import { createAction, handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

//action Type
const GET_POST = 'post/GET_POST';
const REMOVE_POST = 'post/REMOVE_POST';

//action Creators
export const getPost = createAction(GET_POST, api.getPost);
export const removePost = createAction(REMOVE_POST, api.removePost);

//initial State
const initialState = Map({
  post: Map({})
});

//reducer
export default handleActions(
  {
    ...pender({
      type: GET_POST,
      onSuccess: (state, action) => {
        const { data: post } = action.payload;
        return state.set('post', fromJS(post));
      }
    })
  },
  initialState
);
