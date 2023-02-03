const randomNumber = (max) => {
    return Math.floor(Math.random()*max)
}

const randomizeArray = (arr) => {
    let output = []
    while (arr.length !== 0) {
        const randomIndex = randomNumber(arr.length)
        output.push(arr[randomIndex])
        arr.splice(randomIndex,1)
    }
    return output
}

export { randomizeArray }