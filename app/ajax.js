import config from '../config/env';

function checkStatus(response) {
  // if (response.status >= 200 && response.status < 300) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

function getJson(response) {
  return response.json();
}

export function loginRequest(csid, sid, authcode, successCallback, errorCallback) {
  fetch(`${config.api_address}/api/login`, {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
      username: 'temp',
      token: 'temp',
      admin: '',
    },
    body: {
      csid,
      sid,
      authcode,
    },
  })
    .then(checkStatus)
    .then(getJson)
    .then(successCallback)
    .catch(errorCallback);
}

export function registerRequest(csid, sid, successCallback, errorCallback) {
  fetch(`${config.api_address}/api/register`, {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: {
      csid,
      sid,
    },
  })
    .then(checkStatus)
    .then(getJson)
    .then(successCallback)
    .catch(errorCallback);
}

export function logoutRequest(successCallback, errorCallback) {
  fetch(`${config.api_address}/api/logout`, {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
      username: localStorage.username,
      token: localStorage.token,
      admin: localStorage.admin,
    },
  })
    .then(checkStatus)
    .then(getJson)
    .then(successCallback)
    .catch(errorCallback);
}

export function loadStudentPortalRequest(successCallback, errorCallback) {
  fetch(`${config.api_address}/api/loadStudentPortal`, {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
      username: localStorage.username,
      token: localStorage.token,
      admin: localStorage.admin,
    },
  })
    .then(checkStatus)
    .then(getJson)
    .then(successCallback)
    .catch(errorCallback);
}

export function loadAdminPortalRequest(successCallback, errorCallback) {
  fetch(`${config.api_address}/api/loadAdminPortal`, {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
      username: localStorage.username,
      token: localStorage.token,
      admin: localStorage.admin,
    },
  })
    .then(checkStatus)
    .then(getJson)
    .then(successCallback)
    .catch(errorCallback);
}

export function createTeamRequest(teamMembers, successCallback, errorCallback) {
  fetch(`${config.api_address}/api/team`, {
    method: 'put',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
      username: localStorage.username,
      token: localStorage.token,
      admin: localStorage.admin,
    },
    body: { teamMembers },
  })
    .then(checkStatus)
    .then(getJson)
    .then(successCallback)
    .catch(errorCallback);
}

export function disbandTeamRequest(teamId, successCallback, errorCallback) {
  fetch(`${config.api_address}/api/team/${teamId}`, {
    method: 'del',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
      username: localStorage.username,
      token: localStorage.token,
      admin: localStorage.admin,
    },
  })
    .then(checkStatus)
    .then(getJson)
    .then(successCallback)
    .catch(errorCallback);
}

export function assignTeamRequest(newTA, teamId, successCallback, errorCallback) {
  fetch(`${config.api_address}/api/team/${teamId}`, {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
      username: localStorage.username,
      token: localStorage.token,
      admin: localStorage.admin,
    },
    body: { newTA },
  })
    .then(checkStatus)
    .then(getJson)
    .then(successCallback)
    .catch(errorCallback);
}

export function submitGradeRequest(sid, assnId, grade, comment, successCallback, errorCallback) {
  fetch(`${config.api_address}/api/submitGrade`, {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
      username: localStorage.username,
      token: localStorage.token,
      admin: localStorage.admin,
    },
    body: {
      sid,
      assnId,
      grade,
      comment,
    },
  })
    .then(checkStatus)
    .then(getJson)
    .then(successCallback)
    .catch(errorCallback);
}

export function updateClassRequest(csvFormData, successCallback, errorCallback) {
  fetch(`${config.api_address}/api/class/list`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
    },
    body: csvFormData,
  })
    .then(checkStatus)
    .then(getJson)
    .then(successCallback)
    .catch(errorCallback);
}

export function pingRequest(successCallback, errorCallback) {
  fetch(`${config.api_address}/api/ping`, {
    method: 'get',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(checkStatus)
    .then(getJson)
    .then(successCallback)
    .catch(errorCallback);
}

export function pingRequest2(successCallback, errorCallback) {
  fetch(`${config.api_address}/api/ping`, {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(checkStatus)
    .then(getJson)
    .then(successCallback)
    .catch(errorCallback);
}
