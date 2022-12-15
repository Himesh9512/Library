let myBook = [];
let newBook = undefined;

const bookNameInput = document.getElementById('book-name');
const authorNameInput = document.getElementById('author-name');
const pagesCountInput = document.getElementById('pages-count');
const readStatusInput = document.getElementById('read');
const addBookButton = document.getElementById('add-button');

// Book object constructor
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}


// Add book card to webpage
function addBookToLibrary() {
    // code
}

// Create object of book
const createBookObject = function(){
    let bookName = bookNameInput.value;
    let authorName = authorNameInput.value;
    let pagesCount = pagesCountInput.value;
    let readStatus = readStatusInput.value;
    
    newBook = new Book(bookName,authorName,pagesCount,readStatus);
    
    console.log(newBook);
}

// Delete object of book
function deleteBookObject() {
    // code
}

// Toggle read status
function toggleReadStatus() {
    // code
}

addBookButton.addEventListener('click', createBookObject);