import fetch from 'isomorphic-fetch'
import config from '../config';
import * as options from './api.settings';

class CourseApi {
  static getAllCourses() {
    return fetch(`${config.apiAddress}/courses`, options.AUTHENTICATED)
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
    return fetch(`${config.apiAddress}/${courseNum}/admin/courseSettings`, options.AUTHENTICATED)
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

  static getCourseDetails(courseNum) {
    return fetch(`${config.apiAddress}/${courseNum}/admin/courseSettings`, options.AUTHENTICATED)
      .then(course => {
        return course.json();
      })
      .then(course => {
        return course;
      })
      .catch(err => {
        console.log(`course.api::getCourseDetails(courseNum) ERROR: ${err}`);
      });
  }
}

export default CourseApi;