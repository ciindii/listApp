// BOOK CLASS: BOOK
class Book {
  constructor(title, author, number){
    this.title = title;
    this.author = author;
    this.number = number;
  }
}


// UI Cladd: handle UI Tasks
class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: 'Book One',
        author: 'John Doe',
        number: '9287423'
      },
      {
        title: 'Book Two',
        author: 'Jane Doe',
        number: '9287453'
      }
    ];

    const books = StoredBooks;

    //loop through Books
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book){
    //grab list from the DOM
    const list = document.querySelector('#book-list');
    //created new row
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.number}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;
    //append row to List
    list.appendChild(row);
  }
}

// Store Class: Handles Storage -local storage within browser

// EVENT: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// EVENT: Add BOOK

// EVENT: remove a book
