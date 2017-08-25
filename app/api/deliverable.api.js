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

  static createDeliverable(deliverable) {
    const AUTHENTICATED_POST = {
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      method: 'put',
      body: JSON.stringify({deliverable}),
    }
  
    return fetch(`${config.apiAddress}/${deliverable.courseId}/admin/deliverable`, AUTHENTICATED_POST)
      .then(result => {
        return result.json();
      })
      .catch(err => {
        console.log(`deliverable.api::createDeliverable() API ERROR: ${err}`);
      });
  }

  static updateDeliverable(updatedDeliv) {

    const AUTHENTICATED_POST = {
	  credentials: 'include',
	  method: 'post'
    }

    return fetch(`${config.apiAddress}/${newDeliv.courseId}/admin/deliverable`, AUTHENTICATED_POST)
      .then(result => {
        return result.json();
      })
      .catch(err => {
        console.log(`deliverable.api::updateDeliverable() API ERROR: ${err}`);
      });
  }
}

export default DeliverableApi;