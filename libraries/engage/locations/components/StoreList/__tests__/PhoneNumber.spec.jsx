import React from 'react';
import { shallow } from 'enzyme';
import PhoneNumber from '../PhoneNumber';

describe('<PhoneNumber />', () => {
  it('should not render if no phone number is passed', () => {
    const wrapper = shallow(<PhoneNumber />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.instance()).toEqual(null);
  });

  it('should render as expected', () => {
    const wrapper = shallow(<PhoneNumber phone="800-100-0000" />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('PhoneIcon')).toBeTruthy();
    expect(wrapper.find('[data-test-id="store-phone"]').text()).toEqual('800-100-0000');
  });
});
