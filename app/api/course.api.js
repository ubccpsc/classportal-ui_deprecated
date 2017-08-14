import fetch from 'isomorphic-fetch'
import config from '../config';
import * as options from './api.settings';

class CourseApi {
  static getAllCourses() {
    return fetch(`${config.apiAddress}/courses`, options.authenticated)
      .then(courses => {
        return courses.json();
      })
      .then(courses => {
      	return courses;
      })
      .catch(err => {
        console.log(`course.api::getAllCourses() ERROR: No response from API: ${err}`);
      });
  }

  // static getCourseDetails(courseNum) {
  //   return fetch(`${config.apiAddress}/${courseNum}/`)
  //     .then(response => {
  //       return response.json();
  //     })
  //     .catch(err => {
  //       console.log(`course.api::getCourseDetails(courseNum) ERROR: No response from API: ${err}`);
  //     });
  // 
}

export default CourseApi;