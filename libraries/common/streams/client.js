import { filter } from 'rxjs/operators'
import { RECEIVE_CLIENT_INFORMATION } from '../constants/ActionTypes';
import { main$ } from './main';

/**
 * Gets triggered after the client information was updated
 * @type {Observable}
 */
export const clientInformationDidUpdate$ = main$.pipe(
  filter(({ action }) => action.type === RECEIVE_CLIENT_INFORMATION));
