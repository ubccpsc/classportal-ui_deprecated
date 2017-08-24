import fetch from 'isomorphic-fetch'
import config from '../config';
import * as options from './api.settings';

class AdminApi {

  static getAllAdmins(courseId) {
    return fetch(`${config.apiAddress}/${courseId}/admin/admins`, options.AUTHENTICATED)
      .then(response => {
        return response.json()
      });
  }
}

export default AdminApi;

