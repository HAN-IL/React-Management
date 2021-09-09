import React from 'react';

class About extends React.Component {
	constructor(props) {
		super(props);
		this.state={name:""};
	}
	chg=(evt)=>{
		this.setState({name:evt.target.value});
	}
	save=()=>{alert(this.state.name);}
	render(){
		return(
			<div>
				<input type="text" onChange={this.chg}></input>
				<button type="button" onClick={this.save}></button>
			</div>
		)
	}
}
export default About;