// Sample library data
const library = [];

// Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Add book to library
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    library.push(newBook);
    displayBooks();
}

// Display books on the page
function displayBooks() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    if (library.length === 0) {
        bookList.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #666;">No books in your library yet. Start adding some!</p>';
        return;
    }

    library.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        
        const title = document.createElement('h3');
        title.textContent = book.title;
        
        const authorP = document.createElement('p');
        const authorStrong = document.createElement('strong');
        authorStrong.textContent = 'Author:';
        authorP.appendChild(authorStrong);
        authorP.appendChild(document.createTextNode(' ' + book.author));
        
        const pagesP = document.createElement('p');
        const pagesStrong = document.createElement('strong');
        pagesStrong.textContent = 'Pages:';
        pagesP.appendChild(pagesStrong);
        pagesP.appendChild(document.createTextNode(' ' + book.pages));
        
        const statusP = document.createElement('p');
        const statusStrong = document.createElement('strong');
        statusStrong.textContent = 'Status:';
        statusP.appendChild(statusStrong);
        statusP.appendChild(document.createTextNode(' ' + (book.read ? 'Read' : 'Not Read')));
        
        bookCard.appendChild(title);
        bookCard.appendChild(authorP);
        bookCard.appendChild(pagesP);
        bookCard.appendChild(statusP);
        
        bookList.appendChild(bookCard);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    console.log('Odin Library loaded successfully!');
    
    // Add some sample books
    addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, true);
    addBookToLibrary('1984', 'George Orwell', 328, false);
    addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 324, true);
    
    displayBooks();
});
