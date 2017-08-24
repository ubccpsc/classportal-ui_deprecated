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
        console.log(`team.api::getCourseTeams(courseNum) ERROR: No response from API: ${err}`);
      });
  }

  static getCourseTeamsPerSection(courseNum, sectionNum) {
    return fetch(`${config.apiAddress}/${courseNum}/admin/students`, options.AUTHENTICATED)
      .then(teams => {
        return teams.json();
      })
      .catch(err => {
        console.log(`team.api::getCourseTeamsPerSection() ERROR: No response from API: ${err}`);
      });
  }

  static getCourseTeamsPerUser(courseNum, mongoUserId) {
    return fetch(`${config.apiAddress}/${courseNum}/${mongoUserId}/teams`, options.AUTHENTICATED)
      .then(teams => {
        return teams.json();
      })
      .catch(err => {
        console.log(`team.api::getCourseTeamsPerUser() ERROR: No response from API: ${err}`);
      });
  }
}


export default TeamApi;