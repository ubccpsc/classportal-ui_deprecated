import TeamApi from '../api/team.api';
import * as types from './types.helper';

// Fetches the teams on a particular course
export function getCourseTeams(courseNum) {
	return {
		type: types.GET_COURSE_TEAMS,
		payload: TeamApi.getCourseTeams(courseNum),
	}
}

// Fetches the teams on a particular course per section number (not implemented on Restify yet)
export function getCourseTeamsPerSection(courseNum, sectionNum) {
	return {
		type: types.GET_COURSE_TEAMS_PER_SECTION,
		payload: TeamApi.getCourseTeamsPerSection(courseNum, sectionNum),
	}
}

// Fetches the teams for a particular course and User.Id
export function getCourseTeamsPerUser(courseNum, userId) {
	return {
		type: types.GET_COURSE_TEAMS_PER_USER,
		payload: TeamApi.getCourseTeamsPerUser(courseNum, userId),
	}
}