import fetch from 'isomorphic-fetch'
import config from '../config';
import * as options from './api.settings';

class DeliverableApi {
  static getDeliverablesFromCourse(courseNum) {

    return fetch(`${config.apiAddress}/${courseNum}/deliverables`, options.authenticated)
      .then(deliverables => {
        return deliverables.json();
      })
      .catch(err => {
        console.log(`deliverable.api::getDeliverablesFromCourse() ERROR: No response from API: ${err}`);
      });
  }
}

export default DeliverableApi;