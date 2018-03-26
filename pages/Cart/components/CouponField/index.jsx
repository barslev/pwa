import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connect from './connector';
import Layout from './components/Layout';

/**
 * The Coupon Field component.
 */
class CouponField extends Component {
  static propTypes = {
    addCoupon: PropTypes.func,
    hasCouponSupport: PropTypes.bool,
    isLoading: PropTypes.bool,
    onToggleFocus: PropTypes.func,
  };

  static defaultProps = {
    addCoupon: () => {},
    hasCouponSupport: true,
    isLoading: false,
    onToggleFocus: () => {},
  };

  static contextTypes = {
    i18n: PropTypes.func,
  };

  /**
   * Constructor.
   * @param {Object} props The components props.
   */
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  /**
   * Checks if the icon button should be visible.
   * @returns {boolean}
   */
  get isButtonVisible() {
    return (this.state.isFocused || this.state.value);
  }

  /**
   * Checks if the icon button should be disabled.
   * @returns {boolean}
   */
  get isButtonDisabled() {
    return (this.props.isLoading || !this.state.value.length);
  }

  /**
   * Adds a coupon to the cart.
   * @param {Object} event The click event object.
   */
  addCoupon = (event) => {
    event.preventDefault();

    if (!this.isButtonVisible) {
      return;
    }

    if (this.state.isFocused) {
      this.handleFocusChange(false);
    }

    this.props.addCoupon(this.state.value)
      .then(() => {
        this.setState({ value: '' });
      }).catch(() => {});
  }

  /**
   * Handle change inside the input field
   * @param {Object} value The value inside the field
   */
  handleValueChange = (value) => {
    this.setState({
      value,
    });
  }

  /**
   * Internal focus event handler.
   * @param {boolean} isFocused Whether the input component is focused.
   */
  handleFocusChange = (isFocused) => {
    this.setState({
      isFocused,
    });

    this.props.onToggleFocus(isFocused);
  };

  /**
   * Renders the component.
   * @returns {JSX}
   */
  render() {
    if (!this.props.hasCouponSupport) {
      // Only show a message if the shop doesn't support redeeming of coupons within the cart.
      const { __ } = this.context.i18n();
      const messages = [{
        type: 'info',
        message: __('cart.coupons_not_supported'),
      }];

      return <MessageBar messages={messages} />;
    }

    const labelStyle = { display: this.state.value ? 'none' : 'block' };
    const iconStyle = {
      opacity: (this.isButtonVisible) ? 1 : 0,
    };

    return (
      <Layout
        handleAddCoupon={this.addCoupon}
        isFocused={this.state.isFocused}
        isLoading={this.props.isLoading}
        isButtonDisabled={this.isButtonDisabled}
        handleFocusChange={this.handleFocusChange}
        handleValueChange={this.handleValueChange}
        labelStyle={labelStyle}
        iconStyle={iconStyle}
        value={this.state.value}
      />
    );
  }
}

export default connect(CouponField);
