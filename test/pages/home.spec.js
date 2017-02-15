import React from 'react';
import { expect } from 'chai';
import * as sinon from 'sinon';
import { mount } from 'enzyme';
import HomePage from '../../app/pages/home';

describe('/login page', () => {
  it('calls componentWillMount once', () => {
    sinon.stub(HomePage.prototype, 'componentWillMount');
    const wrapper = mount(<HomePage />); // eslint-disable-line no-unused-vars
    expect(HomePage.prototype.componentWillMount).to.have.property('callCount', 1);
    HomePage.prototype.componentWillMount.restore();
  });
});
