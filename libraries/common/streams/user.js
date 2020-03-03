import {filter} from 'rxjs/operators'
import {
  REQUEST_LOGIN,
  SUCCESS_LOGIN,
  ERROR_LOGIN,
  ERROR_LEGACY_CONNECT_REGISTER,
  REQUEST_LOGOUT,
  SUCCESS_LOGOUT,
  RECEIVE_USER,
  ERROR_USER,
} from '../constants/ActionTypes';
import { main$ } from './main';

/**
 * Gets triggered when user is requesting to login.
 * @type {Observable}
 */
export const userWillLogin$ = main$.pipe(filter(({ action }) => action.type === REQUEST_LOGIN));

/**
 * Gets triggered when user login request has gained a response.
 * @type {Observable}
 */
export const userLoginResponse$ = main$.pipe(filter(({ action }) => (
    action.type === SUCCESS_LOGIN ||
    action.type === ERROR_LOGIN
  )));

/**
 * Gets triggered when user has logged in.
 * @type {Observable}
 */
export const userDidLogin$ = main$.pipe(filter(({ action }) => action.type === SUCCESS_LOGIN));

/**
 * Gets triggered when user is requesting to logout.
 * @type {Observable}
 */
export const userWillLogout$ = main$.pipe(filter(({ action }) => action.type === REQUEST_LOGOUT));

/**
 * Gets triggered when user has logged out.
 * @type {Observable}
 */
export const userDidLogout$ = main$.pipe(filter(({ action }) => action.type === SUCCESS_LOGOUT));

/**
 * Gets triggered when the user data was updated.
 * @type {Observable}
 */
export const userDidUpdate$ = main$.pipe(filter(({ action }) => (
    (action.type === RECEIVE_USER) ||
    (action.type === SUCCESS_LOGOUT) ||
    (action.type === ERROR_USER)
  )));

/**
 * Gets triggered when we received the user data.
 * @type {Observable}
 */
export const userDataReceived$ = userDidUpdate$.pipe(filter(({ action }) => action.type === RECEIVE_USER));

/**
 * Gets triggered when the login failed.
 * @type {Observable}
 */
export const loginDidFail$ = main$.pipe(filter(({ action }) => action.type === ERROR_LOGIN));

/**
 * Gets triggered when the legacy sgconnect registration failed
 * @type {Observable}
 */
export const legacyConnectRegisterDidFail$ = main$.pipe(filter(({ action }) => action.type === ERROR_LEGACY_CONNECT_REGISTER));
