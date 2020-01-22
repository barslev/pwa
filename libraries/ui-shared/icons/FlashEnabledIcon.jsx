import React from 'react';
import Icon from '@shopgate/pwa-common/components/Icon';
import { themeConfig } from '@shopgate/pwa-common/helpers/config';

/**
 * The FlashOn icon component.
 * @param {Object} props The icon component properties.
 * @returns {JSX}
 */
const FlashEnabled = props => <Icon content={themeConfig.icons.flashEnabled} {...props} />;

export default FlashEnabled;
