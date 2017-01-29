import React from 'react';
import Module from '../../../components/Module';

const Privacy = () => (
  <Module title="Privacy Policy">
    <h5>
      This website uses GitHub&apos;s OAuth2 Web Application Flow to authenticate users and access
      your public GitHub profile. It never gains access to your login credentials, nor does it
      make any modifications your GitHub account.<br /><br />
      At any time, you can view and/or revoke the access token granted, by accessing the
      &quot;OAuth Applications&quot; tab of your settings page on GitHub.<br /><br />
      For more information, visit:&nbsp;
      <a href="https://developer.github.com/v3/" target="blank">https://developer.github.com/v3/</a>
    </h5>
  </Module>
);

export default Privacy;
