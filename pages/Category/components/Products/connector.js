import { connect } from 'react-redux';
import { getProductsResult } from '@shopgate/pwa-common-commerce/product/selectors/product';
import fetchCategoryProducts from '@shopgate/pwa-common-commerce/category/actions/fetchCategoryProducts';

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @return {Object} The extended component props.
 */
const mapStateToProps = (state, props) => ({
  ...getProductsResult(state, props),
});

/**
 * Connects the dispatch function to a callable function in the props.
 * @param {Function} dispatch The redux dispatch function.
 * @return {Object} The extended component props.
 */
const mapDispatchToProps = dispatch => ({
  getProducts: (categoryId, offset) => dispatch(fetchCategoryProducts(categoryId, offset)),
});

export default connect(mapStateToProps, mapDispatchToProps);
