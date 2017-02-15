import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Header from '../../app/components/Header';
import config from '../../app/config';

describe('Header component', () => {
  const wrapper = shallow(<Header />);

  it('renders the logo', () => {
    expect(wrapper.contains(
      <img className={undefined} alt="" src={config.logo} />
    )).to.equal(true);
  });

  it('renders the title', () => {
    expect(wrapper.contains(
      <p className={undefined}>{config.title}</p>
    )).to.equal(true);
  });

  it('renders the subtitle', () => {
    expect(wrapper.contains(
      <p className={undefined}>{config.subtitle}</p>
    )).to.equal(true);
  });
});
