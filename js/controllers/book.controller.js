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
           <button>Read</button>
           <button>Update</button>
           <button>Delete</button>
        </td>
        </tr>
        `
    })

    const elTable = document.querySelector('tbody')
    elTable.innerHTML = booksHtml
}
