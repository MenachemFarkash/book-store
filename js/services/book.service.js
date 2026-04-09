const gBooks = [
    {
        id: 'bg4J78',
        title: 'Adventure Of Lori',
        price: 130,
        imgUrl: 'https://placehold.co/400x600',
    },
    {
        id: 'bg8K93',
        title: 'World Atlas',
        price: 120,
        imgUrl: 'https://placehold.co/400x600',
    },
    {
        id: 'bg1D93',
        title: 'Zobra the Greek',
        price: 180,
        imgUrl: 'https://placehold.co/400x600',
    },
]

function getBooks() {
    return gBooks
}

function removeBook(id) {
    const bookIdx = gBooks.findIndex((book) => book.id === id)
    gBooks.splice(bookIdx, 1)
    return gBooks
}

function updatePrice(id, newPrice) {
    const bookIdx = gBooks.findIndex((book) => book.id === id)
    gBooks[bookIdx].price = newPrice
    return gBooks
}

function addBook(title, price) {
    const newBook = {
        id: getRandomId(),
        title,
        price,
        imgUrl: `https://placehold.co/400x600`,
    }

    gBooks.push(newBook)
    return gBooks
}

function getBookDetails(id) {
    const bookIdx = gBooks.findIndex((book) => book.id === id)
    return gBooks[bookIdx]
}
