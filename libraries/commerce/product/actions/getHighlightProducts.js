import getProducts from './getProducts';

/**
 * Maybe requests highlight products from server.
 * @param {Object} options The options for the getProducts request.
 * @param {Object} options.params The params for the getHighlightProducts pipeline.
 * @param {string} [options.id=null] A unique id for the component that is using this action.
 * @return {Function} The dispatched action.
 */
const getHighlightProducts = ({ params, id = null }) => (dispatch) => {
  dispatch(getProducts({
    pipeline: 'shopgate.filters.getHighlightProducts',
    params,
    id,
    includeSort: false,
    includeFilters: false,
  }));
};

export default getHighlightProducts;
