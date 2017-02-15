import React, { PropTypes } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import css from './Layout.css';

const Layout = (props) => (
  <div className={css.container}>
    <Header />
    <div className={css.content}>{props.children}</div>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
