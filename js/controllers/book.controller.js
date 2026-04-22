function onInit() {
    readQueryStringParams()
    renderBooks()
}

function renderBooks() {
    console.log('rendering')
    const elTable = document.querySelector('tbody')

    let booksHtml = ''
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
        <td>${'⭐'.repeat(book.rating) + '★'.repeat(5 - book.rating)}</td>
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

function onSetFilterBy() {
    const txt = document.querySelector('.search-input').value
    const minRating = document.querySelector('.min-rating').value

    const filterBy = {
        txt,
        minRating,
    }

    gQueryOptions.filterBy = filterBy
    setQueryStringParams()
    renderBooks()
}

function onSetSortBy() {
    const sortField = document.querySelector('.sort-by').value
    const sortDir = document.querySelector('.sort-dir').checked
    console.log(sortDir)

    gQueryOptions.sortBy.sortDir = sortDir
    gQueryOptions.sortBy.sortField = sortField

    setQueryStringParams()
    renderBooks()
}

function onSetBooksPerPage() {
    const pageSize = +document.querySelector('.books-per-page').value
    gQueryOptions.page.size = pageSize
    setQueryStringParams()
    renderBooks()
}

function onClearFilter() {
    document.querySelector('.search-input').value = ''
    document.querySelector('.min-rating').value = 0
    renderBooks()
}

function renderQueryStringParams() {
    const options = getQueryOptions()

    document.querySelector('.search-input').value = options.filterBy.txt
    document.querySelector('.min-rating').value = options.filterBy.minRating
    document.querySelector('.sort-by').value = options.sortBy.sortField
    document.querySelector('.sort-dir').checked = options.sortBy.sortDir === -1
    document.querySelector('.books-per-page').value = options.page.size
}

function readQueryStringParams() {
    const queryString = new URLSearchParams(window.location.search)

    const filterBy = {
        txt: queryString.get('txt') || '',
        minRating: +queryString.get('minRating') || 0,
    }
    const sortBy = {
        sortField: queryString.get('sortField') || '',
        sortDir: +queryString.get('sortDir') || 1,
    }
    const page = {
        idx: +queryString.get('pageIdx') || 0,
        size: +queryString.get('pageSize') || 5,
    }

    gQueryOptions.filterBy = filterBy
    gQueryOptions.sortBy = sortBy
    gQueryOptions.page = page

    renderQueryStringParams()
}

function setQueryStringParams() {
    const options = getQueryOptions()
    const queryParams = new URLSearchParams()

    queryParams.set('txt', options.filterBy.txt)
    queryParams.set('minRating', options.filterBy.minRating)
    queryParams.set('pageIdx', options.page.idx)
    queryParams.set('pageSize', options.page.size)

    if (options.sortBy.sortField) {
        queryParams.set('sortField', options.sortBy.sortField)
        queryParams.set('sortDir', options.sortBy.sortDir)
    }

    const newUrl = window.location.pathname + '?' + queryParams.toString()
    window.history.pushState({ path: newUrl }, '', newUrl)
}

function onPrevPage() {
    if (gQueryOptions.page.idx === 0) return
    gQueryOptions.page.idx--
    setQueryStringParams()
    renderBooks()
}

function onNextPage() {
    const totalBooks = getBooksCount()
    const maxPageIdx = Math.floor((totalBooks - 1) / gQueryOptions.page.size)
    if (gQueryOptions.page.idx === maxPageIdx) {
        gQueryOptions.page.idx = 0
    } else {
        gQueryOptions.page.idx++
    }
    setQueryStringParams()
    renderBooks()
}
