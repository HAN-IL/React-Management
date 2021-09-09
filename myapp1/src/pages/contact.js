import React from 'react';

class AA extends React.Component {
	constructor(props) {
		super(props);
		this.state={brand:'test'};
	}
	cb=()=>{
		this.setState({brand:"xxx"})
	}
	
	render() {
		return (
			<>
			<h1>{this.state.brand}</h1>
			<button type="button" onClick={this.cb}>chg</button>
			</>
			)
	}
}
class Contact extends React.Component {
	render(){
		return(
				<AA brand="aa"/>
		)
	}
}
export default Contact;