import { initialState } from '../store';

export const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				...state,
				count: state.count + 1,
			};

		case 'UPDATE_DESTINATION':
			return {
				...state,
				destination: action.payload,
			};
		default:
			return state;
	}
};
