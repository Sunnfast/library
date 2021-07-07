let myLibrary = [] // book objects need to be stored in an empty array
myLibrary[0] = new Book("1984", "George Orwell", 328, "read");
myLibrary[1] = new Book("Brave New World", "Aldous Huxley", 311, "read");


const newBook = document.getElementById("new-book-btn").addEventListener("click", function() {
    addBookToArray();
    addNewestBook(myLibrary);
});



function Book(title, author, pages, readState) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readState = readState;
}

function addBookToArray() {
    let title = window.prompt("Enter the book's title.")
    let author = window.prompt("Enter the author of the book.")
    let pages = window.prompt("Enter the page count of the book.")
    let readState = window.prompt("Enter whether you have: read, not read, or are currently reading the book.")
    
    const book = new Book(title, author, pages, readState);

    myLibrary.push(book);

}


function displayAllBooks(library) { // displays pre-existing books
    let i = 0;
    let length = library.length;

    for (i; i < length; i++) {
   
        let titlePara = document.createElement('h2');
        let titleNode = document.createTextNode(library[i].title);
        titlePara.appendChild(titleNode);

        let authorPara = document.createElement('p');
        let authorNode = document.createTextNode(library[i].author);
        authorPara.appendChild(authorNode);


        let pagePara = document.createElement('p');
        let pageNode = document.createTextNode(library[i].pages + " pages");
        pagePara.appendChild(pageNode);

        let readPara = document.createElement('p');
        let readNode = document.createTextNode("Status: " + library[i].readState);
        readPara.appendChild(readNode);

        let bookDiv = document.createElement('div');
        bookDiv.appendChild(titlePara);
        bookDiv.appendChild(authorPara);
        bookDiv.appendChild(pagePara);
        bookDiv.appendChild(readPara);
        bookDiv.setAttribute('id', myLibrary.indexOf(library)); // set data-attribute ID

        let bookShelf = document.getElementById("book");
        bookShelf.appendChild(bookDiv);
        bookDiv.dataset.indexNumber = i;

        // REMOVE BOOK
        
        let removeBtn = document.createElement("button");
        removeBtn.id ="remove-book-btn";
        removeBtn.textContent = "Remove Book";
        bookDiv.appendChild(removeBtn);

        const removeBook = document.getElementById("remove-book-btn").addEventListener("click", () => {
            
            // myLibrary.splice(myLibrary.indexOf(library[1]), 1);
            myLibrary.splice(myLibrary[i], 1)
            // console.log(removed)
            // console.log(myLibrary)
            displayAllBooks(myLibrary)
            console.log('the index of the clicked item is ' + i);
        });


        console.log('i ran')
    }
}


function addNewestBook(library) {
    let length = library.length;

    let titlePara = document.createElement('h2');
    let titleNode = document.createTextNode(library[length-1].title);
    titlePara.appendChild(titleNode);

    let authorPara = document.createElement('p');
    let authorNode = document.createTextNode(library[length-1].author);
    authorPara.appendChild(authorNode);


    let pagePara = document.createElement('p');
    let pageNode = document.createTextNode(library[length-1].pages + " pages");
    pagePara.appendChild(pageNode);

    let readPara = document.createElement('p');
    let readNode = document.createTextNode("Status: " + library[length-1].readState);
    readPara.appendChild(readNode);

    let bookDiv = document.createElement('div');
    bookDiv.appendChild(titlePara);
    bookDiv.appendChild(authorPara);
    bookDiv.appendChild(pagePara);
    bookDiv.appendChild(readPara);

    let bookShelf = document.getElementById("book");
    bookShelf.appendChild(bookDiv);

    bookDiv.dataset.indexNumber = length-1;

    console.log('im working')

      // REMOVE BOOK
        
      let removeBtn = document.createElement("button");
      removeBtn.id ="remove-book-btn";
      removeBtn.textContent = "Remove Book";
      bookDiv.appendChild(removeBtn);

      const removeBook = document.getElementById("remove-book-btn").addEventListener("click", () => {
        myLibrary.splice(myLibrary[length-1], 1);
          displayAllBooks(myLibrary)
          console.log('you clicked me');
      });
}

displayAllBooks(myLibrary);  
// displays books in the background


