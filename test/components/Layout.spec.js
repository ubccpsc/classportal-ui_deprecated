import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Layout from '../../app/components/Layout';
import Header from '../../app/components/Header';
import Footer from '../../app/components/Footer';

describe('Layout component', () => {
  const wrapper = shallow(
    <Layout>
      <p>test</p>
    </Layout>
  );

  it('renders <Header />', () => {
    expect(wrapper.contains(
      <Header />
    )).to.equal(true);
  });

  it('renders child nodes', () => {
    expect(wrapper.contains(
      <p>test</p>
    )).to.equal(true);
  });

  it('renders <Footer />', () => {
    expect(wrapper.contains(
      <Footer />
    )).to.equal(true);
  });
});
