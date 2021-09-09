import React from 'react';
import Header from './components/layout/header.js';
import Content from './components/layout/content.js';

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Content />
			</div>
		);
	}
}

export default App;
