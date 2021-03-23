import {ActionType} from 'typesafe-actions';
import * as appActions from './appActions';
import * as usersActions from './usersActions';

export type AppAction = ReturnType<typeof appActions>;
export type UsersAction = ReturnType<typeof usersActions>;

export type RootAction = AppAction | UsersAction;
