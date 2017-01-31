import React, { PropTypes } from 'react';
import Logout from '../../modules/common/Logout';
// import AdminStudentsView from './Admin/AdminStudentsView';

function renderLogout(files) {
  let firstname = null;
  let prof = null;

  if (files.adminsFile.length >= 0) {
    firstname = files.adminsFile[files.myAdminIndex].firstname;
    prof = files.adminsFile[files.myAdminIndex].prof;
  }

  return (
    <Logout
      firstname={firstname}
      sid={prof ? 'Prof' : 'TA'}
      username={localStorage.username}
    />
  );
}

const AdminPortal = (props) => (
  <div>
    {renderLogout(props.data.files)}
  </div>
);

// <AdminStudentsView data={props.data} />

AdminPortal.propTypes = {
  data: PropTypes.any, // eslint-disable-line
};

AdminPortal.defaultProps = {
  data: null,
};

export default AdminPortal;
