import * as types from '../actions/types.helper';
import initialState from './initial.state';
import {browserHistory} from 'react-router';

const ERROR_TAG = 'ERROR API';
const TEAM_CREATION_SUCCESS = 'SUCCESS';
const TEAM_CREATION_FAILED = 'FAILURE';

export default function teamsReducer(state = initialState.teamCreationStatus, action) {

  switch(action.type) {
    case types.CREATE_CUSTOM_TEAM_FULFILLED:
      if (String(action.payload).indexOf(ERROR_TAG) > -1 ) {
        return TEAM_CREATION_FAILED;
      }
      return TEAM_CREATION_SUCCESS;
    default: 
      return state;  
  }
}