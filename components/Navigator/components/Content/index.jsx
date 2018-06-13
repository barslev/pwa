import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { INDEX_PATH } from '@shopgate/pwa-common/constants/RoutePaths';
import Logo from './components/Logo';
import Title from './components/Title';
import Search from './components/Search';

/**
 * The NavigatorContent component.
 */
class NavigatorContent extends Component {
  static propTypes = {
    routePattern: PropTypes.string,
  };

  static defaultProps = {
    routePattern: null,
  };

  /**
   * @return {boolean}
   */
  get isIndexRoute() {
    return this.props.routePattern === INDEX_PATH;
  }

  /**
   * @return {JSX}
   */
  render() {
    return (
      <Fragment>
        {this.isIndexRoute && <Logo />}
        {!this.isIndexRoute && <Title />}
        <Search />
      </Fragment>
    );
  }
}

export default NavigatorContent;
