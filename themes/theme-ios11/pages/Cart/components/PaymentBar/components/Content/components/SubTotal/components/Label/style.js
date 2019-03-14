import { css } from 'glamor';
import { themeConfig } from '@shopgate/pwa-common/helpers/config';

const { colors, variables } = themeConfig;

const disabled = css({
  color: `${colors.shade4}`,
}).toString();

const subTotalBase = css({
  paddingRight: variables.gap.small,
}).toString();

export default {
  disabled,
  subTotalBase,
};