import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Module from '../../app/components/Module';

describe('Module component', () => {
  const wrapper = shallow(
    <Module title="test">
      <p>test2</p>
    </Module>
  );

  it('renders the title', () => {
    expect(wrapper.contains(
      <div className={undefined}><p>test</p></div>
    )).to.equal(true);
  });

  it('renders child nodes', () => {
    expect(wrapper.contains(
      <p>test2</p>
    )).to.equal(true);
  });
});
