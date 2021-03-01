import axios from 'axios';
const BASE_URL = 'http://localhost:4200/'

export default class AuthApi {
	static login({username, password}: any) {
		const request = axios.get(`${BASE_URL}users?userName=${username}&password=${password}`)
		return request;
	}

	static profile(email: string) {
		const request = axios.get(`${BASE_URL}profiles?userName=${email}`)
		return request;
	}
}
