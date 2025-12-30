const myLibrary = [];

function Book(id, title, author, pages, read){
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){
    const id = crypto.randomUUID();
    let title = prompt("Enter the book title:");
    let author = prompt("Enter the book author:");
    let pages = prompt("Enter the number of pages:");
    let read = confirm("Have you read this book?");
    const newBook = new Book(id, title, author, pages, read);
    myLibrary.push(newBook);
}

function addPreBookToLibrary(title,author,pages,read) {
    const id = crypto.randomUUID();
    const newBook = new Book(id, title, author, pages, read);
    myLibrary.push(newBook);
}

function displayLibrary(){
    const bookContainer = document.querySelector('.book-card-container');
    bookContainer.innerHTML = ''; // Clear existing content
    myLibrary.forEach( (book) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('card');
        bookCard.innerHTML = `
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read ? 'Yes' : 'No'}</p>
            <button>Remove Book</button>
        `;
        bookContainer.appendChild(bookCard);
    });
}

addPreBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addPreBookToLibrary("1984", "George Orwell", 328, false);
addPreBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
addPreBookToLibrary("Pride and Prejudice", "Jane Austen", 279, false);
addPreBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
addPreBookToLibrary("Moby Dick", "Herman Melville", 635, false);
addPreBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addPreBookToLibrary("1984", "George Orwell", 328, false);
addPreBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
addPreBookToLibrary("Pride and Prejudice", "Jane Austen", 279, false);
addPreBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
addPreBookToLibrary("Moby Dick", "Herman Melville", 635, false);
addPreBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addPreBookToLibrary("1984", "George Orwell", 328, false);
addPreBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
addPreBookToLibrary("Pride and Prejudice", "Jane Austen", 279, false);
addPreBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
addPreBookToLibrary("Moby Dick", "Herman Melville", 635, false);
displayLibrary();