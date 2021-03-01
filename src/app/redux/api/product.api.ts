import axios from 'axios';
const BASE_URL = 'http://localhost:4200/'

export default class ProductApi {
	static getProducts() {
		const request = axios.get(`${BASE_URL}products`)
		return request;
	}

	static getProductById(productId: string) {
		const request = axios.get(`${BASE_URL}products?id=${productId}`)
		return request;
	}

	static getMainBanner() {
		const request = axios.get(`${BASE_URL}main-banner`)
		return request;
	}
}
