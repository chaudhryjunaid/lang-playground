import React, {Component} from 'react';
import BookList from './BookList';
import AddBook from './AddBook';
// import faker from 'faker';

class Library extends Component {
	constructor(props) {
		super(props);
		this.loadBooks = this.loadBooks.bind(this);
		this.addBook = this.addBook.bind(this);

		this.state = {
			books: []
		};
	}
	loadBooks() {
		let books = [{
			title: 'A Christmas Carol',
			cover: 'http://picsum.photos/200?ts=1'
		}, {
			title: 'David Copperfield',
			cover: 'http://picsum.photos/200?ts=2'
		}]
		this.setState({books})
	}
	addBook(book) {
		let books = [...this.state.books];
		books.push(book);
		this.setState({
			books
		});
	}
	render() {
		return (
			<div>
				<h1>Library</h1>
				<BookList books={this.state.books} />
				<AddBook onAddBook={this.addBook} />
				<button onClick={this.loadBooks} >Load Books</button>
			</div>
		);
	}
}

export default Library;
