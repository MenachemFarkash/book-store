function onCloseModal() {
    const elModal = document.querySelector(".book-details-modal")
    elModal.classList.add("hidden")
}

function onOpenModal(id) {
    const details = getBookDetails(id)
    const elBookDetailsModal = document.querySelector(".book-details-modal")

    elBookDetailsModal.innerHTML = `
        <img src="https://placehold.co/400x600" alt="" />
                <h1>${details.title}</h1>
                <h2>Price: $${details.price}</h2>
                <h2>Rating: ${details.rating}</h2>
                <button class="close-button" onclick="onCloseModal()">X</button>
        `

    elBookDetailsModal.classList.remove("hidden")
}
