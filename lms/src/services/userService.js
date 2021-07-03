import http from "./httpService";
import { URI_BE } from "../constants/config";

const apiEndPoint = URI_BE + "/users";

export function addUser(user) {
	http.post(`${apiEndPoint}/create`, user);
}

export function getUsers() {
	return http.get(apiEndPoint);
}

export function getUser(id) {
	return http.get(`${apiEndPoint}/${id}`);
}

export function deleteUser(id) {
	return http.delete(`${apiEndPoint}/${id}`);
}
