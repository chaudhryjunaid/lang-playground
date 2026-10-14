import React, {Component} from 'react';
import faker from 'faker';

class RandomName extends Component {
	constructor(props) {
		super(props);
		this.generateRandomName = this.generateRandomName.bind(this);
		this.state = {
			name: faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}")
		};
	}
	generateRandomName() {
		this.setState({
			name: faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}")
		});
	}
	render() {
		return (
			<div>
				<div>Random Name Generator</div>
				<div>{this.state.name}</div>
				<button onClick={this.generateRandomName}>Generate!</button>
			</div>
		);
	}
}

export default RandomName;
