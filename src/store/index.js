import { createStore } from 'redux';
import { mainReducer } from '../reducers';

export const initialState = {
	count: 0,
};

const configureStore = () =>
	createStore(
		mainReducer,
		initialState,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);
export default configureStore;
