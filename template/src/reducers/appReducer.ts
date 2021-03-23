'use strict';
import { produce } from 'immer';
import {setStoreState} from 'src/actions/appActions';
import {createReducer} from 'typesafe-actions';
import {AppAction} from 'src/actions/actionTypes';

export interface AppReducerState {
  version: string;
}

const initialState: AppReducerState = {
  version: '1.0.0',
};

const appReducer = createReducer<AppReducerState, AppAction>(
  initialState,
).handleAction(setStoreState, (state: AppReducerState, action: AppAction) =>
produce((draft:AppReducerState,  action: AppAction) => {
  draft = action.payload
})
);

export default appReducer;
