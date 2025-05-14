let winner = ""
let full = false
const checkInnerCount = () => {
    let innerCount = 0
    innerMostArray.forEach(element => { 
        const titan = document.getElementById(element)
        if (titan.style.background !== "") {
            innerCount++
        }
    })
    full = innerCount === 6
}
const win = () => {
    checkInnerCount()
    const blueScoreElement = document.querySelector(".blue-score")
    const blue = parseInt(blueScoreElement.textContent)
    const redScoreElement = document.querySelector(".red-score")
    const red = parseInt(redScoreElement.textContent)

    if (full) {
        state = false
        if (blue > red) {
            document.querySelector(".winner").innerHTML = "The winner is Blue"
        } else if (blue < red) {
            document.querySelector(".winner").innerHTML = "The winner is Red"
        } else {
            document.querySelector(".winner").innerHTML = "It's a draw"
        }
    } else if (blueTimes === -1) {
        state = false
        winner = "Red"
        document.querySelector(".winner").innerHTML = `The winner is ${winner}`
    } else if (redTimes === -1) {
        state = false;
        winner = "Blue"
        document.querySelector(".winner").innerHTML = `The winner is ${winner}`
    }
}
setInterval(win, 1000)