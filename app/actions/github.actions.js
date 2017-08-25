import GithubApi from '../api/github.api';
import * as types from './types.helper';

// Creates repos for all teams
// @param Course.CourseId: string, Deliverable.Name: string
export function createReposForTeams(courseId, deliverableName) {
  return {
    type: types.CREATE_REPOS_FOR_TEAMS,
    payload: GithubApi.createReposForTeams(courseId, deliverableName),
  }
}

export function createReposForUsers(courseId, deliverableName) {
  return {
    type: types.CREATE_REPOS_FOR_USERS,
    payload: GithubApi.createReposForUsers(courseId, deliverableName),
  }
}