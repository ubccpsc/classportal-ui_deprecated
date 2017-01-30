import React from 'react';
import s from './Footer.css';
import config from '../../config';

const Footer = () => (
  <footer className={s.footer}>
    <p>
      ClassPortal is on <a href={config.github}>GitHub</a>.
      <br />
      <a href={`${config.github}/wiki`}>Docs</a>
      &nbsp;&middot;&nbsp;
      <a href={`${config.github}/issues`}>Report an issue</a>
      &nbsp;&middot;&nbsp;
      <a href={`${config.github}/blob/master/CONTRIBUTING.md`}>Contribute</a>
    </p>
  </footer>
);

export default Footer;
