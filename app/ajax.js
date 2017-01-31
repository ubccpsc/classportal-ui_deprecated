import config from './config';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  return Promise.reject(response);
}

function getJson(response) {
  return response.json();
}

function checkNetworkError(response) {
  const serverDownMessage = 'NetworkError when attempting to fetch resource.';
  const alternativeMessage = 'Oops, the ClassPortal server is down right now! Please try again later.';
  if (response instanceof TypeError && response.message === serverDownMessage) {
    return Promise.reject(alternativeMessage);
  }
  return Promise.resolve()
    .then(() => getJson(response))
    .then((text) => Promise.reject(`${response.status} ${response.statusText}\n${text.error}`));
}

export function loginRequest(csid, sid, authcode) {
  return fetch(`${config.apiAddress}/api/login`, {
    method: 'post',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      username: 'temp',
      token: 'temp',
    },
    body: JSON.stringify({
      csid,
      sid,
      authcode,
    }),
  })
    .then(checkStatus)
    .then(getJson)
    .catch(checkNetworkError);
}

export function registerRequest(csid, sid) {
  return fetch(`${config.apiAddress}/api/register`, {
    method: 'post',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      username: 'temp',
      token: 'temp',
    },
    body: JSON.stringify({
      csid,
      sid,
    }),
  })
    .then(checkStatus)
    .then(getJson)
    .catch(checkNetworkError);
}

export function logoutRequest() {
  return fetch(`${config.apiAddress}/api/logout`, {
    method: 'post',
    mode: 'cors',
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
    method: 'post',
    mode: 'cors',
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
    mode: 'cors',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
      username: localStorage.username,
      token: localStorage.token,
      admin: localStorage.admin,
    },
    body: JSON.stringify({
      teamMembers,
    }),
  })
    .then(checkStatus)
    .then(getJson)
    .catch(checkNetworkError);
}

export function disbandTeamRequest(teamId) {
  return fetch(`${config.apiAddress}/api/team`, {
    method: 'del',
    mode: 'cors',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
      username: localStorage.username,
      token: localStorage.token,
      admin: localStorage.admin,
    },
    body: JSON.stringify({
      teamId,
    }),
  })
    .then(checkStatus)
    .then(getJson)
    .catch(checkNetworkError);
}

export function assignTeamRequest(newTA, teamId) {
  return fetch(`${config.apiAddress}/api/team`, {
    method: 'post',
    mode: 'cors',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
      username: localStorage.username,
      token: localStorage.token,
      admin: localStorage.admin,
    },
    body: JSON.stringify({
      newTA,
      teamId,
    }),
  })
    .then(checkStatus)
    .then(getJson)
    .catch(checkNetworkError);
}

export function submitGradeRequest(sid, assnId, grade, comment) {
  return fetch(`${config.apiAddress}/api/submitGrade`, {
    method: 'post',
    mode: 'cors',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
      username: localStorage.username,
      token: localStorage.token,
      admin: localStorage.admin,
    },
    body: JSON.stringify({
      sid,
      assnId,
      grade,
      comment,
    }),
  })
    .then(checkStatus)
    .then(getJson)
    .catch(checkNetworkError);
}

export function updateClassRequest(csvFormData) {
  return fetch(`${config.apiAddress}/api/class`, {
    method: 'post',
    mode: 'cors',
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
    method: 'post',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
    },
  })
    .then(checkStatus)
    .then(getJson)
    .catch(checkNetworkError);
}
