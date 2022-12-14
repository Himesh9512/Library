let library = [];
let newBook = undefined;
const DEFAULT_OBJECTS = [
    {
        title: "Atomic Habits",
        author: "James Clear",
        pages: "320",
        isRead: "read"
    },
    {
        title: "The psychology of money",
        author: "Morgan Housel",
        pages: "252",
        isRead: "not read"
    }
];

// Book object constructor
class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
};

const librarySection = document.getElementById('books-section');
const bookNameInput = document.getElementById('book-name');
const authorNameInput = document.getElementById('author-name');
const pagesCountInput = document.getElementById('pages-count');
const readStatusInput = document.getElementById('read');
const addBookButton = document.getElementById('add-button');

// Create object of book
const createBookObject = () => {
    let bookName = bookNameInput.value;
    let authorName = authorNameInput.value;
    let pagesCount = pagesCountInput.value;
    let readStatus = readStatusInput.value;

    newBook = new Book(bookName, authorName, pagesCount, readStatus);

    addBookToLibrary(newBook);
    deleteBookCard();
    clearInput();
}

// Delete object of book
const deleteBookCard = () => {
    const deleteButtons = document.querySelectorAll('.delete');
    deleteButtons.forEach(button => {
        button.addEventListener('click',(e)=>{
            let childCard = e.target.parentNode.parentNode;

            librarySection.removeChild(childCard);
        })
    })
}

// Add book card to webpage
const addBookToLibrary = (book) => {
    library.push(book);
    createHtmlElement(book);
}

// append book card to document
const appendBooks = () => {
    library.forEach((book) => {
        createHtmlElement(book);
    })
}

// Push default objects on Page Load
const addDefaultObject = () => {
    DEFAULT_OBJECTS.forEach((book) => {
        library.push(book);
    });
    console.log(library);
    appendBooks();
    deleteBookCard();
}

// Clear input fields
const clearInput = () => {
    bookNameInput.value = '';
    authorNameInput.value = '';
    pagesCountInput.value = '';
}

//  Create HTML element of book object
const createHtmlElement = (book) => {
    // card
    let newBookCard = document.createElement('div');
    newBookCard.classList.add('card');

    let newBookHeader = document.createElement('div'); // book header
    newBookHeader.classList.add('card-header');
    newBookHeader.innerHTML = `${book.title}`

    let newBookBody = document.createElement('div'); // book body
    newBookBody.classList.add('card-body');

    // append header and body to card
    newBookCard.appendChild(newBookHeader);
    newBookCard.appendChild(newBookBody);

    let newBookAuthor = document.createElement('div'); // book author
    newBookAuthor.classList.add('author');
    newBookAuthor.innerText = `Written By: ${book.author}`;

    let newBookPages = document.createElement('div'); // book pages 
    newBookPages.classList.add('pages');
    newBookPages.innerText = `Pages: ${book.pages}`;

    let newBookRead = document.createElement('div'); // book read status
    newBookRead.classList.add('read-status');
    newBookRead.innerHTML = `<div class="read">${book.isRead}</div>`;

    let newBookDelete = document.createElement('button'); // book delete button
    newBookDelete.classList.add('delete');
    newBookDelete.innerHTML = `<div class="delete-icon"><span class="material-symbols-outlined">delete</span></div>`;

    // append all elements to book body
    newBookBody.appendChild(newBookAuthor);
    newBookBody.appendChild(newBookPages);
    newBookBody.appendChild(newBookRead);
    newBookBody.appendChild(newBookDelete);

    // append book card to library
    librarySection.appendChild(newBookCard);
}

// Listen for user click on add button
addBookButton.addEventListener('click', createBookObject);

// Invoke addDefaultObject function when the page is loaded
window.onload = addDefaultObject;