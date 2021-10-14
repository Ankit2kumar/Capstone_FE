import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import configureStore from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
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
