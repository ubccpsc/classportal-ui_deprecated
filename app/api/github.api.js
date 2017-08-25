import fetch from 'isomorphic-fetch'
import config from '../config';
import * as options from './api.settings';

class GithubApi {

  static createReposForTeams(courseNum, deliverableName) {

    const AUTHENTICATED_POST = {
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      method: 'put',
      body: JSON.stringify({deliverableName}),
    }

    return fetch(`${config.apiAddress}/${courseNum}/admin/github/teams`, options.AUTHENTICATED)
      .then(teams => {
      	console.log(`Github.Api::createReposForTeams(${courseNum}, ${deliverableName})`);
        return teams.json();
      })
      .catch(err => {
        console.log(`Github.Api::createReposForTeams() ERROR: No response from API: ${err}`);
      });
  }

  static createReposForUsers(courseNum, deliverableName) {
    return fetch(`${config.apiAddress}/${courseNum}/admin/github/users`, options.AUTHENTICATED)
      .then(teams => {
        return teams.json();
      })
      .catch(err => {
        console.log(`Github.Api::createReposForUsers() ERROR: No response from API: ${err}`);
      });
  }
}


export default GithubApi;