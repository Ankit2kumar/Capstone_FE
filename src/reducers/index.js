import { initialState } from '../store';

export const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				...state,
				count: state.count + 1,
			};
		default:
			return state;
	}
};
