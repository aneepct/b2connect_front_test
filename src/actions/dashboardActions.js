import axios from "axios";

import apiUrl from "../config";

import {
	GET_IP,
	GET_IP_FEED,
	GET_WEATHER_FEED,
	GET_POPULATION_FEED,
} from "./types";

/**
 * Get current IP
 */
export const getCurrentIp = () => (dispatch) => {
	axios
		.get("https://geolocation-db.com/json/")
		.then((res) => {
			dispatch({
				type: GET_IP,
				payload: res.data.IPv4,
			});
		})
		.catch((err) =>
			dispatch({
				type: GET_IP,
				payload: "",
			})
		);
};

/**
 * Get ip info
 */
export const getIpInfo = (currentIP) => (dispatch) => {
	axios
		.post(`${apiUrl}/api/get-ip-info`, {
			ip: currentIP,
		})
		.then((res) => {
			dispatch({
				type: GET_IP_FEED,
				payload: res.data.data,
			});
		})
		.catch((err) =>
			dispatch({
				type: GET_IP_FEED,
				payload: {},
			})
		);
};

/**
 * Get weather info
 */
export const getWeather = (currentIP) => (dispatch) => {
	axios
		.post(`${apiUrl}/api/get-weather-detail`, {
			ip: currentIP,
		})
		.then((res) => {
			console.log(res);
			dispatch({
				type: GET_WEATHER_FEED,
				payload: res.data.data,
			});
		})
		.catch((err) =>
			dispatch({
				type: GET_WEATHER_FEED,
				payload: {},
			})
		);
};

/**
 * Get Populations
 */
export const getPopulations = () => (dispatch) => {
	axios
		.get(`${apiUrl}/api/get-population-info`)
		.then((res) => {
			dispatch({
				type: GET_POPULATION_FEED,
				payload: res.data.data,
			});
		})
		.catch((err) =>
			dispatch({
				type: GET_POPULATION_FEED,
				payload: [],
			})
		);
};
