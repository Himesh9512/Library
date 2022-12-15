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
]

const librarySection = document.getElementById('books-section');
const bookNameInput = document.getElementById('book-name');
const authorNameInput = document.getElementById('author-name');
const pagesCountInput = document.getElementById('pages-count');
const readStatusInput = document.getElementById('read');
const addBookButton = document.getElementById('add-button');

// Book object constructor
class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}

// Add book card to webpage
const addBookToLibrary = (book) => {
    library.push(book);
    let newBookCard = document.createElement('div');
        newBookCard.classList.add('card');

        newBookCard.innerHTML = `
        <div class="card-header">${book.title}</div>
        <div class="card-body">
            <div class="author">${book.author}</div>
            <div class="pages">${book.pages} Pages</div>
            <button class="read-status">
                <div class="read">${book.isRead}</div>
            </button>
            <button class="delete">
                <div class="delete-icon"><span class="material-symbols-outlined">delete</span></div>
            </button>
        </div>`;

        console.log(newBookCard);
        librarySection.appendChild(newBookCard);
}

// Create object of book
const createBookObject = () => {
    let bookName = bookNameInput.value;
    let authorName = authorNameInput.value;
    let pagesCount = pagesCountInput.value;
    let readStatus = readStatusInput.value;

    newBook = new Book(bookName, authorName, pagesCount, readStatus);

    addBookToLibrary(newBook);
    clearInput();
}

// Delete object of book
const deleteBookObject = () => {
    // code
}

// Toggle read status
const toggleReadStatus = () =>{
    // code
}

// append book card to document
const appendBooks = () => {
    library.forEach((book) => {
        let newBookCard = document.createElement('div');
        newBookCard.classList.add('card');

        newBookCard.innerHTML = `
        <div class="card-header">${book.title}</div>
        <div class="card-body">
            <div class="author">${book.author}</div>
            <div class="pages">${book.pages} Pages</div>
            <button class="read-status">
                <div class="read">${book.isRead}</div>
            </button>
            <button class="delete">
                <div class="delete-icon"><span class="material-symbols-outlined">delete</span></div>
            </button>
        </div>`;

        console.log(newBookCard);
        librarySection.appendChild(newBookCard);
    })
}
// Push default objects on Page Load
const addDefaultObject = () => {
    DEFAULT_OBJECTS.forEach((book)=>{
        library.push(book);
    });
    console.log(library);
    appendBooks();
}
// Clear input fields
const clearInput = () => {
    bookNameInput.value = '';
    authorNameInput.value = '';
    pagesCountInput.value = '';
    readStatusInput.value = 'read';
}
addBookButton.addEventListener('click', createBookObject);

window.onload = addDefaultObject;