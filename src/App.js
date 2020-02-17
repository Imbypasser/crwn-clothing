import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import './App.css';

const HatsPage = props => (
	<div>
		<h1>HATS PAGE</h1>
	</div>
);

function App () {
	return (
		<div>
			{/* The moment switch reach it's the url that match. Nothing else is render after that */}
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/hats' component={HatsPage} />
			</Switch>
		</div>
	);
}

export default App;
