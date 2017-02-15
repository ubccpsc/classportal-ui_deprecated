import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Privacy from '../../../app/modules/common/Privacy';

describe('Privacy module', () => {
  const wrapper = shallow(
    <Privacy />
  );

  it('renders a link to the GitHub api', () => {
    expect(wrapper.contains(
      <a href="https://developer.github.com/v3/" target="blank">https://developer.github.com/v3/</a>
    )).to.equal(true);
  });
});
