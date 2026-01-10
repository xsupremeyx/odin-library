class Library {
    #books;
    constructor(){
        this.#books = [];
    }
    addBook(book){
        this.#books.push(book);
    }
    removeBook(bookId){
        this.#books = this.#books.filter(book => book.id !== bookId);
    }
    get getBooks(){
        return [...this.#books];
    }

    set toggleReadStatus(bookId){
        const book = this.#books.find(book => book.id === bookId);
        if(book){
            book.toggleRead();
        }
    }
}

class Book1{
    constructor(id,title,author,pages,read){
        this.id = id;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    toggleRead(){
        this.read = !this.read;
    }
}

const LibraryHandler = (function () {
    const library = new Library();

    const addBooktoLibrary2 = (form) => {
        const id = crypto.randomUUID();
        const title = form.title.value.trim();
        const author = form.author.value.trim();
        const pagesStr = form.pages.value.trim();
        const pages = Number(form.pages.value);
        const read = form["read-status"].value === 'read' ? true : false;

        if (title === '' || author === '' || pages === '') {
            alert('Please fill in all fields.');
            return;
        }
        const newBook = new Book1(id, title, author, pages, read);
        library.addBook(newBook);
    };

    const addPreBooktoLibrary2 = (title,author,pages,read) => {
        const id = crypto.randomUUID();
        const newBook = new Book1(id, title, author, pages, read);
        library.addBook(newBook);
    }

    const removeBookFromLibrary2 = (bookContainer,button) => {
        const bookCard = button.parentElement;
        const bookId = bookCard.getAttribute('data-id');
        bookCard.classList.add('removed');
        library.removeBook(bookId);
    };

    const displayLibrary2 = (bookContainer) => {
        const books = library.getBooks;
        bookContainer.innerHTML = '';
        books.forEach((book) => {
            const bookCard = document.createElement('div');
            bookCard.classList.add('card');
            bookCard.setAttribute('data-id', book.id);
            bookCard.innerHTML = `
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read ? 'Yes' : 'No'}</p>
            <button class="remove-button">Remove Book</button>
            <button class="toggle-read-button">${book.read ? 'Mark as Not Read' : 'Mark as Read'}</button>
            `;
            bookContainer.appendChild(bookCard);
        });
    };

    const toggleReadStatusInLibrary2 = (bookContainer, readButton) => {
        const bookCard = readButton.parentElement;
        const bookId = bookCard.getAttribute('data-id');
        library.toggleReadStatus = bookId;
    };
    
    return {
        addBooktoLibrary2,
        addPreBooktoLibrary2,
        removeBookFromLibrary2,
        displayLibrary2,
        toggleReadStatusInLibrary2
    };
})();

const UIHandler = (function () {
    let dialog;
    let form;
    let bookContainer;
    let addButton;
    let closeButton;
    
    const DOMHandler = () => {
        dialog = document.querySelector('dialog');
        form = dialog.querySelector('.add-book-form');
        bookContainer = document.querySelector('.book-card-container');
        addButton = document.querySelector('.add-book-button');
        closeButton = dialog.querySelector('.close-dialog-button');

    };

    const bookAdderButtonHandler2 = () => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            LibraryHandler.addBooktoLibrary2(form);
            LibraryHandler.displayLibrary2(bookContainer);
            form.reset();
            dialog.close();
        });
    };

    const dialogToggleHandler2 = () => {
        addButton.addEventListener('click', () => {
            dialog.showModal();
        });
            
        closeButton.addEventListener('click', () => {
            dialog.close();
        });
    };

    const removeBookHandler2 = (target) => {
        LibraryHandler.removeBookFromLibrary2(bookContainer,target);
        LibraryHandler.displayLibrary2(bookContainer);
    };

    const toggleReadStatusHandler2 = (target) => {
        LibraryHandler.toggleReadStatusInLibrary2(bookContainer,target);
        LibraryHandler.displayLibrary2(bookContainer);
    };

    const bookContainerHandler = () => {
        bookContainer.addEventListener('click', (e) => {
            if(e.target.classList.contains('remove-button')){
                removeBookHandler2(e.target);
            }
            if(e.target.classList.contains('toggle-read-button')){
                toggleReadStatusHandler2(e.target);
            }
        });
    };

    const displayInitialBooks = () => {
        LibraryHandler.addPreBooktoLibrary2("The Hobbit", "J.R.R. Tolkien", 310, true);
        LibraryHandler.addPreBooktoLibrary2("1984", "George Orwell", 328, false);
        LibraryHandler.addPreBooktoLibrary2("To Kill a Mockingbird", "Harper Lee", 281, true);
        LibraryHandler.addPreBooktoLibrary2("Pride and Prejudice", "Jane Austen", 279, false);
        LibraryHandler.addPreBooktoLibrary2("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
        LibraryHandler.addPreBooktoLibrary2("Moby Dick", "Herman Melville", 635, false);
        LibraryHandler.displayLibrary2(bookContainer);
    };

    const init = () => {
        DOMHandler();
        displayInitialBooks();
        dialogToggleHandler2();
        bookAdderButtonHandler2();
        bookContainerHandler();
    }

    return {
        init
    };
})();

document.addEventListener('DOMContentLoaded', () => {
    UIHandler.init();
});