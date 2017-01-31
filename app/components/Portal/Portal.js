import React from 'react';
import { loadPortalRequest } from '../../../app/ajax';
import AdminPortal from '../AdminPortal';
import StudentPortal from '../StudentPortal';

class Portal extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      data: {},
    };
  }

  componentWillMount() {
    loadPortalRequest()
      .then((response) => {
        console.log(response);
        this.setState({ data: response, loaded: true });
      })
      .catch(alert);
  }

  render() {
    return this.state.loaded &&
      (this.state.data.userType === 'admin'
      ? (<AdminPortal data={this.state.data} />)
        : (<StudentPortal data={this.state.data} />));
  }
}

export default Portal;
