import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

ReactDOM.render(
	<>
		<BrowserRouter>
			<Provider store={configureStore()}>
				<App />
			</Provider>
		</BrowserRouter>
	</>,
	document.getElementById('root')
);
