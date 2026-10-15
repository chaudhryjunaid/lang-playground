import React, {Component} from 'react';
let moment = require('moment-timezone');

class EpochConverter extends Component {
	constructor(props) {
		super(props);
		this.handleTimestampChange = this.handleTimestampChange.bind(this);
		this.setOrClearTimer = this.setOrClearTimer.bind(this);
		this.timer = this.timer.bind(this);
		this.state = {
			now: false,
			timestamp: 0,
			timer: null
		};
	}
	handleTimestampChange($event) {
		let timestamp = $event.target.value;
		this.setState({
			timestamp
		});
	}
	setOrClearTimer($event) {
		let now = $event.target.checked;
		if (now) {
			console.log('Setting timer...');
			let timer = setInterval(this.timer, 1000);
			this.setState({timer, now});
		} else {
			console.log('Clearing timer...');
			if (this.state.timer) {
				clearInterval(this.state.timer);
			}
			this.setState({timer: null, now});
		}
	}
	timer() {
		this.setState({timestamp: moment().unix()});
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
				<h1>{moment.unix(this.state.timestamp).tz('Etc/UTC').format('YYYY-MM-DD HH:mm:ss')}</h1>
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
