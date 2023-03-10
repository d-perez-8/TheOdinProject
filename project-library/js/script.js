class Library {
    constructor() {
        this.books = []
    }

    // checks to see if there's an identitcal book in the library
    addBook(newBook) {
        if (!this.isInLibrary(newBook)) {
            this.books.push(newBook)
        }
    }

    // delete book using the filter method
    removeBook(title) {
        this.books = this.books.filter((book) => book.title !== title)
    }

    // retrieves the book by using its title
    getBook(title) {
        return this.book.find((book) => book.title === title)
    }

    // checks to see if book is already in the library
    isInLibrary(newBook) {
        return this.books.some((book) => book.title === newBook.title)
    }
}

class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}


// DOM Elements
const library = document.getElementById('library')
document.querySelector(".open-button").addEventListener('click', openForm)
document.querySelector(".cancel").addEventListener('click', closeForm)



function openForm() {
    document.getElementById("myForm").style.display = "block";
}  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


// Updates the library with new entry
function updateLibraryGrid() {
    resetLibraryGrid()
    for (let book of library.books) {
        createBookCard(book)
    }
}

function resetLibraryGrid() {
    library.innerHTML = ''
}

function createBookCard(book) {
    // design of the book card
    const bookCard = document.createElement('div').classList.add('book-card')
    const buttonGroup = document.createElement('div').classList.add('button-group')
    const readBtn = document.createElement('button').classList.add('btn')
    const removeBtn = document.createElement('button').classList.add('btn')
    readBtn.addEventListener('click', toggleRead)
    removeBtn.addEventListener('click', removeBook)

    // contents of the book card
    const title = document.createElement('p').innerHTML = `${book.title}`
    const author = doucment.createElement('p').innerHTML = `${book.author}`
    const pages = doucment.createElement('p').innerHTML = `${book.pages}`
    removeBtn.textContent = 'Remove'

    // changes read section based on text content of the read button
    if (book.read) {
        const isRead = document.createElement('button')
        isRead.textContent = 'Read'
        isRead.classList.add('btn-light-green')
    } else {
        isRead.textContent = 'Not Read'
        isRead.classList.add('btn-light-red')
    }

    // cards that will be shown on the DOM
    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(pages)
    buttonGroup.appendChild(readBtn)
    buttonGroup.appendChild(removeBtn)
    bookCard.appendChild(buttonGroup)
    library.appendChild(bookCard)
}

function getBookFromInput() {
    // makes an object for the new book entry
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const read = document.getElementById('read').value
    return new Book(title, author, pages, read)
}

const addBook = (e) => {
    e.preventDefault()
    closeForm()
}

const toggleRead = (e) => {
    const title = e.target.parentNode.firstChild.innerHTML.replaceAll(
        '"',
        ''
    )
    library.getBook(title).read = !book.read
    saveLocal()
    updateLibraryGrid()
}

// local storage
const saveLocal = () => {
    localStorage.setItem('library', JSON.stringify(library.books))
}

const restoreLocal = () => {
    const books = JSON.parse(localStorage.getItem('library'))
    if (books) {
        library.books = books.map((book) => JSONToBook(book))
    } else {
        library.books = []
    }
}