let myLibrary = [] // book objects need to be stored in an empty array

function Book(title, author, pages, readState) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readState = readState;

    // this.info = function() {
    //     console.log(Book.info)
    // }
}

function addBookToLibrary() {
    let title = window.prompt("Enter the book's title.")
    let author = window.prompt("Enter the author of the book.")
    let pages = window.prompt("Enter the page count of the book.")
    let readState = window.prompt("Enter whether you have: read, not read, or are currently reading the book.")
    
    myLibrary.push(new Book(title, author, pages, readState));


}
addBookToLibrary();
let length = myLibrary.length

function displayBook() {
    let i = 0;

    for (i; i > length; i++) {
        document.getElementById("book-display").textContent = myLibrary[0].info()
    }
}


displayBook();

// document.getElementById("book-display").textContent = 