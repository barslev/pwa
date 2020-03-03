import { filter } from 'rxjs/operators'
import { main$ } from './main';
import {
  NAVIGATE,
  ROUTE_WILL_ENTER,
  ROUTE_DID_ENTER,
  ROUTE_WILL_LEAVE,
  ROUTE_DID_LEAVE,
  ROUTE_DID_UPDATE,
} from '../constants/ActionTypes';

/**
 * @type {Observable}
 */
export const navigate$ = main$.pipe(
  filter(({ action }) => action.type === NAVIGATE));

/**
 * @type {Observable}
 */
export const routeWillEnter$ = main$.pipe(
  filter(({ action }) => action.type === ROUTE_WILL_ENTER));

/**
 * @type {Observable}
 */
export const routeDidEnter$ = main$.pipe(
  filter(({ action }) => action.type === ROUTE_DID_ENTER));

/**
 * @type {Observable}
 */
export const routeWillLeave$ = main$.pipe(
  filter(({ action }) => action.type === ROUTE_WILL_LEAVE));

/**
 * @type {Observable}
 */
export const routeDidLeave$ = main$.pipe(
  filter(({ action }) => action.type === ROUTE_DID_LEAVE));

/**
 * @type {Observable}
 */
export const routeDidUpdate$ = main$.pipe(
  filter(({ action }) => action.type === ROUTE_DID_UPDATE));

/**
 * @type {Observable}
 * @deprecated use routeDidEnter$
 */
export const routeDidChange$ = routeDidEnter$;
