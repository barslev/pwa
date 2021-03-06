import { connect } from 'react-redux';
import { makeIsLastStackEntry, updateStatusBarBackground } from '@shopgate/engage/core';

/**
 * Create exclusive component selector.
 * @returns {Function}
 */
function makeMapStateToProps() {
  const isLastStackEntry = makeIsLastStackEntry();
  return (state, { route }) => {
    const { visible, state: routeState } = route;

    return {
      setFocus: visible && !routeState.preventA11yFocus && isLastStackEntry(state, {
        routeId: route.id,
      }),
    };
  };
}

/**
 * @param {Function} dispatch The redux dispatch function.
 * @returns {Object}
 */
const mapDispatchToProps = dispatch => ({
  updateStatusBar: ({ background }, isDefault) => {
    dispatch(updateStatusBarBackground(background, isDefault));
  },
  resetStatusBar: () => {
    dispatch(updateStatusBarBackground());
  },
});

export default connect(makeMapStateToProps, mapDispatchToProps);
