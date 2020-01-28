import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { I18n, SurroundPortals, RadioGroup } from '@shopgate/engage/components';
import {
  PRODUCT_FULFILLMENT_METHOD_DIRECT_SHIP,
  PRODUCT_FULFILLMENT_SELECTOR,
  Availability,
  StoreSelector,
  LocationStockInfo,
} from '@shopgate/engage/product';
import FulfillmentSelectorItem from './FulfillmentSelectorItem';
import connect from './connector';
import * as styles from './style';

// TODO: Integrate a conditioner that ensures selection of characteristics and required options
/**
 * Renders a fulfillment selector box for fulfillment methods direct ship and pick up in store,
 * when fulfillment methods are set up for the product and pick up in store is one of them.
 * @param {string} props.productCode Code to the product or a variant.
 * @param {string[]} props.fulfillmentMethods All fulfillment methods provided for the product.
 * @param {Object} props.location Last location that was selected for the previous product/variant.
 * @returns {JSX}
 */
export const FulfillmentSelector = ({ productId: productCode, fulfillmentMethods, location }) => {
  const directShip = 'product.fulfillment_selector.direct_ship';
  const pickUp = 'product.fulfillment_selector.pick_up_in_store';

  // Pre-select direct ship on entering the PDP
  const [selection, setSelection] = useState(location.code !== null ? pickUp : directShip);
  // Keep the selected location in the state
  const [selectedLocation, setSelectedLocation] = useState(null);
  // Keeps track of the selector sheet being opened or not, to "debounce" open events.
  const [isSelectorOpened, setIsSelectorOpened] = useState(false);

  // Whenever the pick-up selection is made, open the store selector sheet and use the new location.
  const handleChange = useCallback((elementName) => {
    setSelection(elementName);

    if (elementName === directShip) {
      setSelectedLocation(null);
      return;
    }

    if (isSelectorOpened) {
      return;
    }

    // Open the store selector sheet and provide a callback for when it is closed.
    setIsSelectorOpened(true);

    // TODO: Change this to open the store selector only if it wasn't yet selected for the product
    // TODO: Opening the selector to change selection should be done with a "Choose Location" link
    StoreSelector.open((newLocation) => {
      setIsSelectorOpened(false);
      if (!newLocation) {
        // Reset the UI back to directShip if there was no location selected already
        if (selectedLocation === null) {
          setSelection(directShip);
        }
      } else if (newLocation.productCode === productCode) {
        // Update the selected location only when the selection was done for the same product.
        setSelectedLocation(newLocation);
      }
    });
  }, [isSelectorOpened, selectedLocation, productCode]);

  if (!fulfillmentMethods) {
    return null;
  }

  return (
    <SurroundPortals portalName={PRODUCT_FULFILLMENT_SELECTOR} portalProps={{ productCode }}>
      <div className={styles.container} data-test-id="product-fulfillment-selector">
        <div role="heading" aria-hidden className={styles.title}>
          <I18n.Text string="product.fulfillment_selector.heading" />
        </div>
        <RadioGroup
          name="product.fulfillment_selector"
          value={selection}
          className={styles.radioGroup}
          onChange={handleChange}
          isControlled
          direction="column"
        >
          <FulfillmentSelectorItem name={directShip}>
            <Availability
              productId={productCode}
              fulfillmentSelection={PRODUCT_FULFILLMENT_METHOD_DIRECT_SHIP}
            />
          </FulfillmentSelectorItem>
          <FulfillmentSelectorItem name={pickUp}>
            {location && <LocationStockInfo location={selectedLocation || location} />}
          </FulfillmentSelectorItem>
        </RadioGroup>
      </div>
    </SurroundPortals>
  );
};

FulfillmentSelector.propTypes = {
  productId: PropTypes.string.isRequired,
  fulfillmentMethods: PropTypes.arrayOf(PropTypes.string),
  location: PropTypes.shape({
    code: PropTypes.string,
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
};

FulfillmentSelector.defaultProps = {
  fulfillmentMethods: null,
  location: null,
};

export default connect(FulfillmentSelector);
