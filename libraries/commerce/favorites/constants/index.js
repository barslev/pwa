export const FAVORITES_PATH = '/favourite_list';

export const REQUEST_FAVORITES = 'REQUEST_FAVORITES';
export const RECEIVE_FAVORITES = 'RECEIVE_FAVORITES';
export const ERROR_FAVORITES = 'ERROR_FAVORITES';
export const ERROR_FETCH_FAVORITES = 'ERROR_FETCH_FAVORITES';

export const REQUEST_ADD_FAVORITES = 'REQUEST_ADD_FAVORITES';
export const REQUEST_REMOVE_FAVORITES = 'REQUEST_REMOVE_FAVORITES';

export const REQUEST_SYNC_FAVORITES = 'REQUEST_SYNC_FAVORITES';
export const RECEIVE_SYNC_FAVORITES = 'RECEIVE_SYNC_FAVORITES';
export const ERROR_SYNC_FAVORITES = 'ERROR_SYNC_FAVORITES';
export const IDLE_SYNC_FAVORITES = 'IDLE_SYNC_FAVORITES';

export const FAVORITES_LIFETIME = 3600000; // 1 hour
export const FETCH_FAVORITES_THROTTLE = (process.env && process.env.NODE_ENV === 'test') ? 0 : 2000;
