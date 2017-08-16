import DeliverableApi from '../api/deliverable.api';
import * as types from './types.helper';

// gets a list of deliverables in course from rest api
export function getDeliverablesFromCourse(courseNum) {
  return {
    type: types.GET_DELIVERABLES_FROM_COURSE,
    payload: DeliverableApi.getDeliverablesFromCourse(courseNum),
  }
}