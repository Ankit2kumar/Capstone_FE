import 'bootstrap/dist/css/bootstrap.min.css';

import MyNavbar from './components/Navbar/MyNavbar';

import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginPage from './LoginPage/LoginPage';
import HomePage from './components/HomePage/HomePage';
import { incrementAction } from './actions';
import Home from './components/SearchList/BackOffice/Components/Home';

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
	increaseCounter: () => {
		dispatch(incrementAction());
	},
});

function App() {
	return (
		<>
			<MyNavbar />

			<Switch>
				<Route exact path="/login" component={LoginPage} />
				<Route path="/" exact component={HomePage} />
				{/* <Route path="/destination" exact component={} /> */}
				<Route exact path="/backoffice" component={Home} />
			</Switch>
		</>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
