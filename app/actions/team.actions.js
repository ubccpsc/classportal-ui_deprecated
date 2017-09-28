import TeamApi from '../api/team.api';
import * as types from './types.helper';

// Fetches the teams on a particular course
export function getCourseTeams(courseNum) {
  return {
    type: types.GET_COURSE_TEAMS,
    payload: TeamApi.getCourseTeams(courseNum),
  };
}

// Fetches the teams on a particular course per section number (not implemented on Restify yet)
export function getCourseTeamsPerSection(courseNum, sectionNum) {
  return {
    type: types.GET_COURSE_TEAMS_PER_SECTION,
    payload: TeamApi.getCourseTeamsPerSection(courseNum, sectionNum),
  };
}

// Fetches the teams for a particular course and User.Id
export function getCourseTeamsPerUser(courseNum, userId) {
  return {
    type: types.GET_COURSE_TEAMS_PER_USER,
    payload: TeamApi.getCourseTeamsPerUser(courseNum, userId),
  };
}

// Fetches the students without a team for possible new teams
export function getStudentsWithoutTeam(courseNum) {
  return {
    type: types.GET_STUDENTS_WITHOUT_TEAM,
    payload: TeamApi.getStudentsWithoutTeam(courseNum),
  };
}

// Fetches the team for the course param
export function getMyTeamsPerCourse(courseNum) {
  return {
    type: types.GET_MY_TEAMS_PER_COURSE,
    payload: TeamApi.getMyTeamsPerCourse(courseNum),
  };
}

// Fetches the team for the course param
export function getCourseTeamsWithBatchMarking(courseNum) {
  return {
    type: types.GET_COURSE_TEAMS_WITH_BATCH_MARKING,
    payload: TeamApi.getCourseTeamsWithBatchMarking(courseNum),
  };
}

export function isStudentInSameLab(courseNum, username) {
  return {
    type: types.IS_STUDENT_IN_SAME_LAB,
    payload: TeamApi.isStudentInSameLab(courseNum, username),
  };
}

export function createCustomTeam(courseNum, usernames) {
  return {
    type: types.CREATE_CUSTOM_TEAM,
    payload: TeamApi.createCustomTeam(courseNum, usernames),
  };
}

export function removeStudentFromTentativeTeam(username) {
  return {
    type: types.REMOVE_STUDENT_FROM_TENTATIVE_TEAM,
    payload: username,
  };
}
