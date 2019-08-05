import React from 'react';
import { useWidgetSettings } from '../hooks/useWidgetSettings';

/**
 * Injects the widget - configuration - settings for a specific widget by its id and
 * an optional index. into the desired component.  If no index is given it will inject the first
 * found widget - configuration - settings by widgetId.
 * @param {Function} WrappedComponent The react component to wrap.
 * @param {string} widgetId The id of the widget to look for, which must exist in the config.
 * @param {number|undefined} [index] The optional index of the widget.
 * @returns {JSX}
 */
export function withWidgetSettings(WrappedComponent, widgetId, index) {
  /**
   * The actual HOC.
   * @param {Object} props The component props.
   * @returns {JSX}
   */
  const WithWidgetSettings = (props) => {
    const settings = useWidgetSettings(widgetId, index);
    return (<WrappedComponent widgetSettings={settings} {...props} />);
  };

  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  WithWidgetSettings.displayName = `WithWidgetSettings(${displayName})`;

  return WithWidgetSettings;
}
