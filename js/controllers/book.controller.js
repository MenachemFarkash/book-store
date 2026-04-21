function onInit() {
    renderBooks()
}

function renderBooks() {
    console.log("rendering")
    const elTable = document.querySelector("tbody")

    let booksHtml = ""
    let booksArr = getBooks()

    if (booksArr.length === 0) {
        elTable.innerHTML = '<tr><td colspan="4"><h1>No Data Available</h1></td></tr>'
        return
    }

    booksArr.map((book) => {
        booksHtml += `
        <tr>
        <td>${book.title}</td>
        <td>${book.price}</td>
        <td>${book.rating}</td>
        <td>
           <button onclick="onOpenModal('${book.id}')">Details</button>
           <button onclick="onUpdateBook('${book.id}')">Update</button>
           <button onclick="onRemoveBook('${book.id}')">Delete</button>
        </td>
        </tr>
        `
    })

    elTable.innerHTML = booksHtml
}

function onRemoveBook(id) {
    removeBook(id)
    renderBooks()
}

function onUpdateBook(id) {
    const newPrice = +prompt("Enter a price")
    updatePrice(id, newPrice)
    renderBooks()
}

function onAddBook() {
    const title = prompt("Enter A Title")
    const price = prompt("Enter A Price")
    addBook(title, price)
    renderBooks()
}

function onSetFilterBy() {
    const txt = document.querySelector(".search-input").value
    const minRating = document.querySelector(".min-rating").value

    const filterBy = {
        txt,
        minRating,
    }

    gQueryOptions.filterBy = filterBy
    renderBooks()
}

function onClearFilter() {
    document.getElementById("search-input").value = ""
    renderBooks()
}
