import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { I18n } from '../../../components';

/**
 * Renders the inventory given by the location into a given translation string.
 * @param {Object} props The component props.
 * @param {string} props.availabilityText The translation string to use.
 * @param {Object} props.location The component props.
 * @param {number|undefined} props.maxNumberVisible The component props.
 * @param {string} props.aboveMaxExtension The component props.
 * @return {JSX}
 */
function Inventory(props) {
  const {
    availabilityText, location, maxNumberVisible, aboveMaxExtension,
  } = props;

  if (!location || location.visibleInventory === null) {
    return null;
  }

  return (
    <Fragment>
      <I18n.Text
        string={availabilityText}
        params={{
          // Limit stock to max visible stock if it is set
          visibleInventory: (
            maxNumberVisible &&
              location.visibleInventory > maxNumberVisible
              ? `${maxNumberVisible}${aboveMaxExtension}`
              : location.visibleInventory
          ),
        }}
      />
      &nbsp;
    </Fragment>
  );
}

Inventory.propTypes = {
  aboveMaxExtension: PropTypes.string,
  availabilityText: PropTypes.string,
  location: PropTypes.shape({
    name: PropTypes.string,
    productCode: PropTypes.string,
    visibleInventory: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    inventoryBlind: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  }),
  maxNumberVisible: PropTypes.number,
};

Inventory.defaultProps = {
  aboveMaxExtension: '',
  availabilityText: '',
  location: null,
  maxNumberVisible: null,
};

export default Inventory;