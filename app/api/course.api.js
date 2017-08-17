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
        console.log(`course.api::getAllCourses() ERROR: ${err}`);
      });
  }

  static getCourseSettings(courseNum) {
    return fetch(`${config.apiAddress}/${courseNum}/admin/courseSettings`, options.authenticated)
      .then(courseSettings => {
        return courseSettings.json();
      })
      .then(courseSettings => {
        return courseSettings;
      })
      .catch(err => {
        console.log(`course.api::getCourseSettings(courseNum) ERROR: ${err}`);
      });
  }
}

export default CourseApi;