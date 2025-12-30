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
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p><strong>Status:</strong> ${book.read ? 'Read' : 'Not Read'}</p>
        `;
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
