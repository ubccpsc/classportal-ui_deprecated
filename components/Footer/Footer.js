import React from 'react';
import s from './Footer.css';

const Footer = () => (
  <footer className={s.footer}>
    <div className={s.bar} />
    <p>
      ClassPortal is on <a href="https://github.com/ubccpsc/classportal-frontend">GitHub</a>.
      <br />
      <a href="https://github.com/ubccpsc/classportal-frontend/wiki">Docs</a>
      &nbsp;&middot;&nbsp;
      <a href="https://github.com/ubccpsc/classportal-frontend/issues">Report an issue</a>
      &nbsp;&middot;&nbsp;
      <a href="https://github.com/ubccpsc/classportal-frontend/CONTRIBUTING.md">Contribute</a>
      <br />
      &copy; Reid Holmes 2017
    </p>
  </footer>
);

export default Footer;
