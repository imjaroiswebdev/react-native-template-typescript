'use strict';
import { produce } from 'immer';
import {fetchUserAsync, setUser} from 'src/actions/usersActions';
import {User} from 'src/types';
import {createReducer} from 'typesafe-actions';
import {UsersAction} from 'src/actions/actionTypes';

export interface UsersState {
  user?: User;
}

const initialState: UsersState = {};

const usersReducer = createReducer<UsersState, UsersAction>(initialState)
  .handleAction(fetchUserAsync.success, produce((draft: UsersState, action: UsersAction) => {
     draft.user = action.payload
  }))
  .handleAction(setUser, produce((draft: UsersState, action: UsersAction) => {
    draft.user = action.payload
  }));

export default usersReducer;
