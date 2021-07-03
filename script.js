let myLibrary = [] // book objects need to be stored in an empty array

const newBook = document.getElementById("new-book-btn").addEventListener("click", function() {
    addBookToLibrary();
});


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
    
    const book = new Book(title, author, pages, readState);

    myLibrary.push(book);

    length = myLibrary.length // might need to move inside addBookToLibrary function at the end to keep recalculating
    displayBook(myLibrary);

    // this.info = function() {
    //     console.log(title, author, pages, readState)
    // }

}



function displayBook(library) {
    let i = 0;

    for (i; i < length; i++) {



        document.getElementById("book-title").textContent = library[i].title;
        document.getElementById("book-author").textContent = library[i].author;
        document.getElementById("pages").textContent = library[i].pages + " pages";
        document.getElementById("readState").textContent = library[i].readState;

        console.log('i ran')
    }
}



