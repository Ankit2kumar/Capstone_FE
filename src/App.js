import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { connect } from 'react-redux';
//import { withRouter } from 'react-router-dom';
import { incrementAction } from './actions';
import LandingPage from '../src/components/LandingPage/LandingPage';
import LoginPage from './components/LoginPage/LoginPage';
import { Switch, Route } from 'react-router-dom';

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
	increaseCounter: () => {
		dispatch(incrementAction());
	},
});
function App({ count, increaseCounter }) {
	return (
		<>
			<Switch>
				<Route exact path="/" component={LandingPage}></Route>

				<Route exact path="/loginPage" component={LoginPage}></Route>
			</Switch>
		</>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
