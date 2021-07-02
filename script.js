let myLibrary = [] // book objects need to be stored in an empty array

function Book(title, author, pages, readState) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readState = readState;
}

function addBookToLibrary() {
    let title = window.prompt("Enter the book's title.")
    let author = window.prompt("Enter the author of the book.")
    let pages = window.prompt("Enter the page count of the book.")
    let readState = window.prompt("Enter whether you have: read, not read, or are currently reading the book.")

    myLibrary.push(title, author, pages, readState);
}

addBookToLibrary();