const gBooks = [
    {
        id: 'bg4J78',
        title: 'Adventure Of Lori',
        price: 120,
        imgUrl: 'https://example.com/Adventure-Of-Lori.jpg',
    },
    {
        id: 'bg8K93',
        title: 'World Atlas',
        price: 120,
        imgUrl: 'https://example.com/great-gatsby.jpg',
    },
    {
        id: 'bg1D93',
        title: 'Zobra the Greek',
        price: 120,
        imgUrl: 'https://example.com/great-gatsby.jpg',
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
        imgUrl: `https://example.com/${this.id}.jpg`,
    }

    gBooks.push(newBook)
    return gBooks
}
