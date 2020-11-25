import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { DropDown } from '../DropDown'

describe('Dropdown', () => {
  test('should render', () => {
  const wrapper = shallow(<DropDown children = {<div />} button={<button />} />);
    expect(wrapper).toBeDefined();//проверка что компонент отрисован
    expect(wrapper.find('#button')).toBeDefined();
    expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy();
  })
  test('should render(snapshot)', () => {
    const wrapper = shallow(<DropDown children={<div />} button={<button />} />)
    expect(wrapper).toMatchSnapshot()
  })
})