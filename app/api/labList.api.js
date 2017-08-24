import fetch from 'isomorphic-fetch'
import config from '../config';
import * as options from './api.settings';

class LabListApi {
  static getLabSectionsFromCourse(courseNum) {

    return fetch(`${config.apiAddress}/${courseNum}/labSections`, options.authenticated)
      .then(labSections => {
        return labSections.json();
      })
      .catch(err => {
        console.log(`labList.api::getLabList() ERROR: No response from API: ${err}`);
      });
  }

  static uploadLabList(courseNum, labList) {

  	const AUTHENTICATED_FILE_POST = {
  		credentials: 'include',
  		method: 'post',
  		body: labList,
	}

  	return fetch(`${config.apiAddress}/${courseNum}/admin/labList`, AUTHENTICATED_FILE_POST)
  	  .then(result => {
  	  	return result.json();
  	  })
  	  .catch(err => {
  	  	console.log(`labList.api::uploadLabList(courseNum, csvFormData) ERROR: No response from API: ${err}`)
  	  });
  }
}

export default LabListApi;