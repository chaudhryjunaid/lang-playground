import React, {Component} from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.inc = this.inc.bind(this);
		this.dec = this.dec.bind(this);
		this.state = {
			count: 0
		};
	}
	inc() {
		let count = this.state.count + 1;
		this.setState({
			count: count
		});
	}
	dec() {
		let count = this.state.count - 1;
		this.setState({
			count: count
		});
	}
	render() {
		return (
			<div>
				<h2>Counter</h2>
				<h1>{this.state.count}</h1>
				<button onClick={this.inc}>Increment!</button>
				<button onClick={this.dec}>Decrement!</button>
			</div>
		);
	}
}

export default Counter;
