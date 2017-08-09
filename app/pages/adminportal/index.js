import React, { PropTypes } from 'react';
import Logout from '../../modules/common/Logout';
// import AdminStudentsView from './Admin/AdminStudentsView';

const AdminPortal = (props) => (
  <div/>
    // <Logout
    //   firstname={props.data.adminsFile[props.data.myAdminIndex].firstname}
    //   sid={props.data.adminsFile[props.data.myAdminIndex].prof ? 'Prof' : 'TA'}
    //   username={localStorage.username}
    // />
);

AdminPortal.propTypes = {
  data: PropTypes.any, // eslint-disable-line
};

export default AdminPortal;
