import { from } from 'rxjs'
import { mainSubject } from '../store/middelwares/streams';

/**
 * Gets triggered on every redux action that is dispatched.
 * @type {Observable}
 */
export const main$ = from(mainSubject);

if (window.Cypress) {
  window.main$ = main$;
}
