import React, {Component} from 'react';

class AddBook extends Component {
	constructor(props) {
		super(props);
		this.updateBookData = this.updateBookData.bind(this);
		this.addBook = this.addBook.bind(this);

		this.state = {
			title: '',
			cover: ''
		};
	}
	updateBookData($event) {
		let name = $event.target.name;
		let value = $event.target.value;
		this.setState({
			[name]: value
		});
	}
	addBook($event) {
		$event.preventDefault();
		this.props.onAddBook(this.state);
	}
	render() {
		return (
			<form onSubmit={this.addBook}>
				<label>
					Book title:
					<input type="text" name="title" onChange={this.updateBookData} />
				</label>
				<label>
					Book cover image:
					<input type="text" name="cover" onChange={this.updateBookData} />
				</label>
				<button type="submit" disabled={!this.state.title}>Add Book</button>
			</form>
		);
	}
}

export default AddBook;
