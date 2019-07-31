import React, { memo } from 'react';
import PropTypes from 'prop-types';
import LocationIcon from '@shopgate/pwa-ui-shared/icons/LocationIcon';
import I18n from '@shopgate/pwa-common/components/I18n';
import { address as container, addressIcon } from './style';

/**
 * Renders the a pickup location's address information.
 * @param {Object} props The component props.
 * @returns {JSX}
 */
const Address = ({ address }) => {
  const {
    street, street2, street3, street4,
  } = address;

  return (
    <div className={container}>
      <div className={addressIcon}>
        <LocationIcon />
      </div>
      <div>
        <div>{street}</div>
        {street2 !== '' && <div>{street2}</div>}
        {street3 !== '' && <div>{street3}</div>}
        {street4 !== '' && <div>{street4}</div>}
        <I18n.Text string="product.location.address" params={address} />
      </div>
    </div>
  );
};

Address.propTypes = {
  address: PropTypes.shape({
    city: PropTypes.string,
    postalCode: PropTypes.string,
    region: PropTypes.string,
    street: PropTypes.string,
    street2: PropTypes.string,
    street3: PropTypes.string,
    street4: PropTypes.string,
  }).isRequired,
};

export default memo(Address);
