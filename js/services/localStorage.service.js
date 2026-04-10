function uploadToLocalStorage(newBook) {
    const data = fetchDataFromLocalStorage()
    data.push(newBook)
    uploadDataToLocalStorage(data)
}

function removeFromLocalStorage(id) {
    const data = fetchDataFromLocalStorage()
    const bookIdx = data.findIndex((book) => book.id === id)
    data.splice(bookIdx, 1)
    uploadDataToLocalStorage(data)
}

function fetchDataFromLocalStorage() {
    let data = localStorage.getItem('books')
    let parsedData = []

    if (localStorage.getItem('books')) {
        parsedData = JSON.parse(data)
    }

    return parsedData
}

function uploadDataToLocalStorage(data) {
    localStorage.setItem('books', JSON.stringify(data))
    return data
}
