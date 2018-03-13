import { SUCCESS_DELETE_COUPONS_FROM_CART } from '../constants';

/**
 * Creates the dispatched SUCCESS_DELETE_COUPONS_FROM_CART action object.
 * @param {boolean} [requestsPending=false] Tells if other cart related requests are pending.
 * @returns {Object} The dispatched action object.
 */
const successDeleteCouponsFromCart = (requestsPending = false) => ({
  type: SUCCESS_DELETE_COUPONS_FROM_CART,
  requestsPending,
});

export default successDeleteCouponsFromCart;
