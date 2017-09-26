export const AUTHENTICATED = {
	credentials: 'include',
	mode: 'cors',
}

export const AUTHENTICATED_GET = {
	credentials: 'include',
	method: 'get',
	mode: 'no-cors',
}

export const AUTHENTICATED_PUT = {
	credentials: 'include',
	method: 'put',
	mode: 'same-origin'
}
