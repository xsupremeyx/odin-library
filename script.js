const myLibrary = [];

function Book(id, title, author, pages, read){
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(form){
    const id = crypto.randomUUID();

    const title = form.title.value.trim();
    const author = form.author.value.trim();
    const pages = form.pages.value.trim();
    const read = form["read-status"].value;

    console.log(title, author, pages, read);
    if (title === '' || author === '' || pages === '') {
        alert('Please fill in all fields.');
        return;
    }
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
        bookCard.setAttribute('data-id', book.id);
        bookCard.innerHTML = `
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read ? 'Yes' : 'No'}</p>
            <button class="remove-button">Remove Book</button>
            <button class="toggle-read-button">Toggle Read Status</button>
        `;
        bookContainer.appendChild(bookCard);
    });
}



function dialogToggleHandler(){
    const dialog = document.querySelector('dialog');
    const button = document.querySelector('.add-book-button');
    const closeButton = dialog.querySelector('.close-dialog-button');
    button.addEventListener('click', () => {
        dialog.showModal();
    });
        
    closeButton.addEventListener('click', () => {
        dialog.close();
        console.log('Dialog closed');
    });
}

function bookAdderButtonHandler(){
    const dialog = document.querySelector('dialog');
    const form = dialog.querySelector('.add-book-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addBookToLibrary(form);
        displayLibrary();
        form.reset();
        dialog.close();
    });
}

function removeBookHandler(){
    const bookContainer = document.querySelector('.book-card-container');
    bookContainer.addEventListener('click', (e) => {
        if(e.target.classList.contains('remove-button')){
            const bookCard = e.target.parentElement;
            const bookId = bookCard.getAttribute('data-id');
            console.log('Removing book with ID:', bookId);
            bookCard.classList.add('removed');
            const bookIndex = myLibrary.findIndex(book => book.id == bookId);
            if(bookIndex !== -1){
                myLibrary.splice(bookIndex, 1);
                displayLibrary();
            }
        }
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
dialogToggleHandler();
bookAdderButtonHandler();
removeBookHandler();