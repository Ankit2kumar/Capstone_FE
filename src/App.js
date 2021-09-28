import 'bootstrap/dist/css/bootstrap.min.css';

import MyNavbar from './components/Navbar/MyNavbar';

import { Switch, Route } from 'react-router-dom';

import LoginPage from './LoginPage/LoginPage';
import HomePage from './components/HomePage/HomePage';

function App() {
	return (
		<>
			<MyNavbar />

			<Switch>
				<Route exact path="/login" component={LoginPage} />
				<Route path="/" exact component={HomePage} />
			</Switch>
		</>
	);
}

export default App;
