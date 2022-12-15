let myBooks = [];
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
    myBooks.push(book);
    console.log(myBooks);
}

// Create object of book
const createBookObject = () => {
    let bookName = bookNameInput.value;
    let authorName = authorNameInput.value;
    let pagesCount = pagesCountInput.value;
    let readStatus = readStatusInput.value;

    newBook = new Book(bookName, authorName, pagesCount, readStatus);

    console.log(newBook);
    addBookToLibrary(newBook);
}

// Delete object of book
const deleteBookObject = () => {
    // code
}

// Toggle read status
const toggleReadStatus = () =>{
    // code
}

// Push default objects on Page Load
const addDefaultObject = () => {
    DEFAULT_OBJECTS.forEach((book)=>{
        myBooks.push(book);
    });
    console.log(myBooks);
}
addBookButton.addEventListener('click', createBookObject);

window.onload = addDefaultObject;