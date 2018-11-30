import React, {Component} from 'react';
let moment = require('moment');

class EpochConverter extends Component {
	constructor(props) {
		super(props);
		this.handleTimestampChange = this.handleTimestampChange.bind(this);
		this.setOrClearTimer = this.setOrClearTimer.bind(this);
		this.timer = this.timer.bind(this);
		this.state = {
			timestamp: 0,
			date: moment.unix(0).format(),
			now: false,
			timer: null
		};
	}
	handleTimestampChange($event) {
		let timestamp = $event.target.value;
		this.setState({
			timestamp,
			date: moment.unix(timestamp).format()
		});
	}
	setOrClearTimer($event) {
		console.log('ev: ', $event.target.checked);
		let now = $event.target.checked;
		this.setState({now});
		if (now) {
			console.log('Setting state: true')
			let timer = setInterval(this.timer, 1000);
			this.setState({timer});
		} else {
			console.log('Setting state: false');
			if (this.state.timer) {
				clearInterval(this.state.timer);
			}
			this.setState({timer: null});
		}
	}
	timer() {
		this.setState({timestamp: moment().unix(), date: moment().format()});
	}
	render() {
		return (
			<div>
				<h2>Epoch Converter</h2>
				<input
					type="number"
					name="timestamp"
					value={this.state.timestamp}
					disabled={this.state.now}
					onChange={this.handleTimestampChange}
				/>
				<h1>{this.state.date}</h1>
				<input
					type="checkbox"
					checked={this.state.now}
					onChange={this.setOrClearTimer}
				/> Follow Time!
			</div>
		);
	}
}

export default EpochConverter;
