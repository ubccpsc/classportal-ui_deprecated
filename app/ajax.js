import config from './config';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    return Promise.reject(response);
  }
}

function getJson(response) {
  return response.json();
}

function checkNetworkError(response) {
  const serverDownMessage = 'NetworkError when attempting to fetch resource.';
  const alternativeMessage = 'Oops! Looks like the ClassPortal server is down right now. Sorry!';
  if (response instanceof TypeError && response.message === serverDownMessage) {
    return Promise.reject(alternativeMessage);
  } else {
    console.log(response);
    return Promise.reject(response);
  }
}

export function loginRequest(csid, sid, authcode) {
  return fetch(`${config.apiAddress}/api/login`, {
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
    .catch(checkNetworkError);
}

export function registerRequest(csid, sid) {
  return fetch(`${config.apiAddress}/api/register?csid=${csid}&sid=${sid}`, {
    method: 'get',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(checkStatus)
    .then(getJson)
    .catch(checkNetworkError);
}

export function logoutRequest() {
  return fetch(`${config.apiAddress}/api/logout`, {
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
    .catch(checkNetworkError);
}

export function loadPortalRequest() {
  return fetch(`${config.apiAddress}/api/load`, {
    method: 'get',
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
    .catch(checkNetworkError);
}

export function createTeamRequest(teamMembers) {
  return fetch(`${config.apiAddress}/api/team`, {
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
    .catch(checkNetworkError);
}

export function disbandTeamRequest(teamId) {
  return fetch(`${config.apiAddress}/api/team/${teamId}`, {
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
    .catch(checkNetworkError);
}

export function assignTeamRequest(newTA, teamId) {
  return fetch(`${config.apiAddress}/api/team/${teamId}`, {
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
    .catch(checkNetworkError);
}

export function submitGradeRequest(sid, assnId, grade, comment) {
  return fetch(`${config.apiAddress}/api/submitGrade`, {
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
    .catch(checkNetworkError);
}

export function updateClassRequest(csvFormData) {
  return fetch(`${config.apiAddress}/api/class`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
    },
    body: csvFormData,
  })
    .then(checkStatus)
    .then(getJson)
    .catch(checkNetworkError);
}

export function pingRequest() {
  return fetch(`${config.apiAddress}/api/ping`, {
    method: 'get',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(checkStatus)
    .then(getJson)
    .catch(checkNetworkError);
}
