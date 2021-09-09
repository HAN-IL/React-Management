import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './../../config/page-route.js';

class Content extends React.Component {
	render() {
		return (
			<Switch>
				{
					routes.map((route, index) => (
					<Route
						
						path={route.path}
						exact={route.exact}
						component={route.component}
					/>
				))
				}
			</Switch>
		);
	}
}

export default Content;