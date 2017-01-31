import React from 'react';
import AdminPortal from '../adminportal';
import StudentPortal from '../studentportal';
import LoadingMessage from '../../modules/common/LoadingMessage';
import { loadPortalRequest } from '../../../app/ajax';

class PortalContainer extends React.Component {
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
      .catch((error) => {
        alert(error);
        localStorage.clear();
        window.location.reload(true);
      });
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

export default PortalContainer;
