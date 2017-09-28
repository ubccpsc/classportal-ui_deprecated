import fetch from 'isomorphic-fetch';
import config from '../config';
import * as options from './api.settings';

class GithubApi {

  static createReposForTeamsWithBatchMarking(courseNum, deliverableName) {
    const AUTHENTICATED_POST = {
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
      method: 'put',
      body: JSON.stringify({deliverableName}),
    };

    console.log('deliverableName');
    console.log(deliverableName);
    console.log('courseNum');
    console.log(courseNum);

    return fetch(`${config.apiAddress}/${courseNum}/admin/github/team`, AUTHENTICATED_POST)
      .then(teams => {
        console.log(`Github.Api::createReposForTeams(${courseNum}, ${deliverableName})`);
        return teams.json();
      })
      .catch(err => {
        console.log(`Github.Api::createReposForTeams() ERROR: No response from API: ${err}`);
      });
  }

  static createReposForUsers(courseNum, deliverableName) {
    return fetch(`${config.apiAddress}/${courseNum}/admin/github/user`, options.AUTHENTICATED)
      .then(teams => {
        return teams.json();
      })
      .catch(err => {
        console.log(`Github.Api::createReposForUsers() ERROR: No response from API: ${err}`);
      });
  }
}


export default GithubApi;
