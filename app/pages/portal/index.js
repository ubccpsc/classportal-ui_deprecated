import React from 'react';
import { loadPortalRequest } from '../../../app/ajax';
import AdminPortal from './AdminPortal';
import StudentPortal from './StudentPortal';
import LoadingMessage from '../../modules/common/LoadingMessage';

class PortalPage extends React.Component {
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
    if (!this.state.loaded) {
      return (<LoadingMessage />);
    }
    return (this.state.data.userType === 'admin'
      ? (<AdminPortal data={this.state.data} />)
      : (<StudentPortal data={this.state.data} />));
  }
}

export default PortalPage;
