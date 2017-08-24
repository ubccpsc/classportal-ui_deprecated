import fetch from 'isomorphic-fetch'
import config from '../config';
import * as options from './api.settings';

class DeliverableApi {
  static getDeliverablesFromCourse(courseNum) {

    return fetch(`${config.apiAddress}/${courseNum}/deliverables`, options.AUTHENTICATED)
      .then(deliverables => {
        return deliverables.json();
      })
      .catch(err => {
        console.log(`deliverable.api::getDeliverablesFromCourse() API ERROR: ${err}`);
      });
  }

  static createDeliverable(newDeliv) {
    return fetch(`${config.apiAddress}/${newDeliv.courseId}/admin/deliverable`, options.AUTHENTICATED_PUT)
      .then(result => {
        return result.json();
      })
      .catch(err => {
        console.log(`deliverable.api::createDeliverable() API ERROR: ${err}`);
      });
  }

  static updateDeliverable(updatedDeliv) {
    return fetch(`${config.apiAddress}/${newDeliv.courseId}/admin/deliverable`, options.AUTHENTICATED_POST)
      .then(result => {
        return result.json();
      })
      .catch(err => {
        console.log(`deliverable.api::updateDeliverable() API ERROR: ${err}`);
      });
  }
}

export default DeliverableApi;