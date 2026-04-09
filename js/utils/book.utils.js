function getRandomId() {
    const lettersAndNums = 'abcdefghijklmnopqrstuvwxyz1234567890'
    let newId = ''
    for (let i = 0; i < 6; i++) {
        newId += lettersAndNums[getRandomInt(0, lettersAndNums.length)]
    }
    return newId
}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min)
    const maxFloored = Math.floor(max)
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled) // The maximum is exclusive and the minimum is inclusive
}
