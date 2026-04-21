let gBooks

function getBooks() {
    gBooks = fetchDataFromLocalStorage()
    const filterBy = gQueryOptions.filterBy
    const sortBy = gQueryOptions.sortBy

    let books = _getFilteredBooks(filterBy)
    books = getSortedBooks(sortBy, books)

    return books
}

function removeBook(id) {
    const books = getBooks()
    const bookIdx = books.findIndex((book) => book.id === id)
    books.splice(bookIdx, 1)
    uploadDataToLocalStorage(books)
    return gBooks
}

function updatePrice(id, newPrice) {
    const books = getBooks()
    const bookIdx = books.findIndex((book) => book.id === id)

    books[bookIdx].price = newPrice
    uploadDataToLocalStorage(books)
    return gBooks
}

function addBook(title, price) {
    const newBook = {
        id: getRandomId(),
        title,
        price,
        imgUrl: `https://placehold.co/400x600`,
        rating: getRandomInt(1, 5),
    }

    uploadToLocalStorage(newBook)
    return gBooks
}

function getBookDetails(id) {
    const books = getBooks()
    const bookIdx = books.findIndex((book) => book.id === id)
    return books[bookIdx]
}

function filterBooksByTitle(searchTerm) {
    const books = fetchDataFromLocalStorage()
    searchTerm = !searchTerm ? gQueryOptions.filterBy.txt : searchTerm
    const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()))
    return filteredBooks
}

function filterBooksByRating(minRating) {
    const books = fetchDataFromLocalStorage()
    minRating = !minRating ? gQueryOptions.filterBy.minRating : minRating
    const filteredBooks = books.filter((book) => book.rating >= minRating)
    return filteredBooks
}

function setFilterBy(txt) {
    gQueryOptions.filterBy.txt = txt
    renderBooks()
}

const gQueryOptions = {
    filterBy: { txt: '', minRating: 0 },
    sortBy: { sortField: '', sortDir: 1 },
    page: { idx: 0, size: 3 },
}

function _getFilteredBooks(filterBy) {
    let books = gBooks.slice()

    if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        books = books.filter((book) => regex.test(book.title))
    }

    if (filterBy.minRating > 0) {
        books = books.filter((book) => book.rating >= filterBy.minRating)
    }

    return books
}

function getSortedBooks(sortBy, books) {
    console.log(sortBy)
    const sortDir = sortBy.sortDir ? 1 : -1

    if (sortBy.sortField === 'title') {
        books.sort((a, b) => a.title.localeCompare(b.title) * sortDir)
    } else if (sortBy.sortField === 'price') {
        books.sort((a, b) => (a.price - b.price) * sortDir)
    } else if (sortBy.sortField === 'rating') {
        books.sort((a, b) => (a.rating - b.rating) * sortDir)
    }

    return books
}
