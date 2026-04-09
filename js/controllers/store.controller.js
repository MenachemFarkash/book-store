function onCloseModal() {
    const elModal = document.querySelector('.book-details-modal')
    elModal.classList.add('hidden')
}

function onOpenModal(id) {
    const details = getBookDetails(id)
    const elBookDetailsModal = document.querySelector('.book-details-modal')
    const detailsHtml = ''

    elBookDetailsModal.innerHTML = `
        <img src="https://placehold.co/400x600" alt="" />
                <h1>${details.title}</h1>
                <h2>${details.price}</h2>
                <button class="close-button" onclick="onCloseModal()">X</button>
        `

    elBookDetailsModal.classList.remove('hidden')
}
