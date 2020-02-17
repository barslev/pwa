import { connect } from 'react-redux';
import {
  makeGetFulfillmentMethods,
  makeIsFulfillmentSelectorDisabled,
  makeGetUserLocation,
} from '../../selectors';
import { storeFulfillmentMethod } from '../../action-creators';

/**
 * @param {Object} state The current application state.
 * @param {Object} props The component props.
 * @return {Object} The extended component props.
 */
function makeMapStateToProps() {
  const getUserLocation = makeGetUserLocation();
  const getFulfillmentMethods = makeGetFulfillmentMethods();
  const isFulfillmentSelectorDisabled = makeIsFulfillmentSelectorDisabled();

  /**
   * @param {Object} state The application state.
   * @param {Object} props The component props.
   * @returns {Object}
   */
  return (state, props) => ({
    fulfillmentMethods: getFulfillmentMethods(state, props),
    location: getUserLocation(state),
    disabled: isFulfillmentSelectorDisabled(state, props),
  });
}

const mapDispatchToProps = {
  storeFulfillmentMethod,
};

export default connect(makeMapStateToProps, mapDispatchToProps);