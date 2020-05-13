import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import Users from './pages/Users';
import NewPlace from './pages/NewPlace';
import TestPage from './components/testPage/TestPage';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path='/' exact>
					<Users />
				</Route>
				<Route path='/places/new' exact>
					<NewPlace />
				</Route>
				<Route path='/testpage' exact>
					<TestPage />
				</Route>
				<Redirect to='/' />
			</Switch>
		</Router>
	);
};

export default App;
