import React, { PropTypes } from 'react';
import AdminDeliverables from '../../modules/admin/AdminDeliverables';

const AdminDeliverablesView = (props) => (
  <div>
    <AdminDeliverables deliverables={props.files.deliverablesFile} />
  </div>
);

AdminDeliverablesView.propTypes = {
  files: PropTypes.any, // eslint-disable-line
};

export default AdminDeliverablesView;
