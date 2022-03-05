import {
	GET_IP,
	GET_IP_FEED,
	GET_WEATHER_FEED,
	GET_POPULATION_FEED,
} from "../actions/types";

const initialState = {
	currentIP: "",
	ipInfo: {},
	weather: {},
	countyPopulations: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
	switch (action.type) {
		case GET_IP:
			return {
				...state,
				currentIP: action.payload,
			};
		case GET_IP_FEED:
			return {
				...state,
				ipInfo: action.payload,
			};
		case GET_WEATHER_FEED:
			return {
				...state,
				weather: action.payload,
			};
		case GET_POPULATION_FEED:
			return {
				...state,
				countyPopulations: action.payload,
			};
		default:
			return state;
	}
}
