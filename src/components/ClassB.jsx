import React from 'react';

class B extends React.Component {
	constructor() {
		super();
		this.a = 1;
	}
	componentDidMount() {
		this.setState(state => {
			return { quantity: state.quantity + 1 };
		});
	}
	render() {
		return (
			<>
				<div className="div"></div>
			</>
		);
	}
}
export { B };
