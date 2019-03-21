import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@shopgate/pwa-common/components/Grid';
import I18n from '@shopgate/pwa-common/components/I18n';
import FlashlightButton from './components/FlashlightButton';
import styles from './style';

/**
 * @param {boolean} flashlightState The on/off state of the flashlight.
 * @param {Function} onToggleFlashlight The toggle event triggered by the user.
 * @returns {JSX}
 */
const ScannerBar = ({ flashlightState, onToggleFlashlight }) => (
  <Grid className={styles.container}>
    <Grid.Item className={styles.column}>
      <FlashlightButton onToggle={onToggleFlashlight} flashlightState={flashlightState} />
    </Grid.Item>
    <Grid.Item className={styles.column}>
      <I18n.Text string="scanner.instructions" />
    </Grid.Item>
  </Grid>
);

ScannerBar.propTypes = {
  flashlightState: PropTypes.bool.isRequired,
  onToggleFlashlight: PropTypes.func.isRequired,
};

export default ScannerBar;