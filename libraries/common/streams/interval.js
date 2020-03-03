import {interval} from 'rxjs'

/**
 * Gets triggered every second.
 * @type {Observable}
 */
export const second$ = interval(1000);
