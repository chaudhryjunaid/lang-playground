import React, {Component} from 'react';

class BookList extends Component {
	render() {
		return (
			<div>
				{this.props.books.map((book, index) => (
					<div key={index}>
						<h3>{book.title}</h3>
						<img src={book.cover} alt={book.title + ' cover'}/>
					</div>
				))}
			</div>
		);
	}
}

export default BookList;
