function onInit() {
    renderBooks()
}

function renderBooks() {
    let booksHtml = ''
    const booksArr = getBooks()
    booksArr.map((book) => {
        booksHtml += `
        <tr>
        <td>${book.title}</td>
        <td>${book.price}</td>
        <td>
           <button onclick="onOpenModal('${book.id}')">Details</button>
           <button onclick="onUpdateBook('${book.id}')">Update</button>
           <button onclick="onRemoveBook('${book.id}')">Delete</button>
        </td>
        </tr>
        `
    })

    const elTable = document.querySelector('tbody')
    elTable.innerHTML = booksHtml
}

function onRemoveBook(id) {
    removeBook(id)
    renderBooks()
}

function onUpdateBook(id) {
    const newPrice = +prompt('Enter a price')
    updatePrice(id, newPrice)
    renderBooks()
}

function onAddBook() {
    const title = prompt('Enter A Title')
    const price = prompt('Enter A Price')
    addBook(title, price)
    renderBooks()
}
