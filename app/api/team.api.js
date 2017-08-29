import fetch from 'isomorphic-fetch'
import config from '../config';
import * as options from './api.settings';

class TeamApi {
  static getCourseTeams(courseNum) {
    return fetch(`${config.apiAddress}/${courseNum}/error/teams`, options.AUTHENTICATED)
      .then(teams => {
        return teams.json();
      })
      .catch(err => {
        console.log(`team.api::getCourseTeams(courseNum) ERROR from API: ${err}`);
      });
  }

  static getCourseTeamsPerSection(courseNum, sectionNum) {
    return fetch(`${config.apiAddress}/${courseNum}/admin/students`, options.AUTHENTICATED)
      .then(teams => {
        return teams.json();
      })
      .catch(err => {
        console.log(`team.api::getCourseTeamsPerSection() ERROR from API: ${err}`);
      });
  }

  static getCourseTeamsPerUser(courseNum, mongoUserId) {
    return fetch(`${config.apiAddress}/${courseNum}/${mongoUserId}/teams`, options.AUTHENTICATED)
      .then(teams => {
        return teams.json();
      })
      .catch(err => {
        console.log(`team.api::getCourseTeamsPerUser() ERROR from API: ${err}`);
      });
  }

  static getMyTeamsPerCourse(courseNum) {
    return fetch(`${config.apiAddress}/${courseNum}/myTeams`, options.AUTHENTICATED)
      .then(teams => {
        return teams.json();
      })
      .catch(err => {
        console.log(`team.api::getCourseTeamsPerCourse() ERROR from API: ${err}`);
      });
  }

  static getStudentsWithoutTeam(courseNum) {
    return fetch(`${config.apiAddress}/${courseNum}/students/withoutTeam`, options.AUTHENTICATED)
      .then(students => {
        return students.json();
      })
      .catch(err => {
        console.log(`team.api::getCourseTeamsPerUser() ERROR from API: ${err}`);
      });
  }
}


export default TeamApi;