import React, { PropTypes } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import s from './Layout.css';

const Layout = (props) => (
  <div className={s.container}>
    <Header />
    <div className={s.content}>{props.children}</div>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
