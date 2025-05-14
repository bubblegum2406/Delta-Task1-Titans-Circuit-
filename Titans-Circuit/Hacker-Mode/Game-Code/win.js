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
const saveToLeaderboard = (winner) => {
    const date = new Date()
    const des = { year: 'numeric', month: 'short', day: 'numeric' }
    const format = date.toLocaleDateString('en-US', des)


    const leader = [[
        winner,format
    ]]
    let data = JSON.parse(localStorage.getItem("Leaderboard")) || []
    data.push(leader)
    localStorage.setItem("Leaderboard", JSON.stringify(data));
}

const win = () => {
    checkInnerCount()
    const blueScoreElement = document.querySelector(".blue-score")
    const blue = parseInt(blueScoreElement.textContent)
    const redScoreElement = document.querySelector(".red-score")
    const red = parseInt(redScoreElement.textContent)

    if (full && state) {
        state = false
        if (blue > red) {
            winSound.play()
            document.querySelector(".winner").innerHTML = "The winner is Blue"
            saveToLeaderboard("Blue")
        } else if (blue < red) {
            winSound.play()
            document.querySelector(".winner").innerHTML = "The winner is Red"
            saveToLeaderboard("Red")
        } else {
            winSound.play()
            document.querySelector(".winner").innerHTML = "It's a draw"
            saveToLeaderboard("Draw")
        }
    } else if (blueTimes === -1 && state) {
        winSound.play()
        state = false
        winner = "Red"
        document.querySelector(".winner").innerHTML = `The winner is ${winner}`
        saveToLeaderboard("Red")
    } else if (redTimes === -1 && state) {
        winSound.play()
        state = false
        winner = "Blue"
        document.querySelector(".winner").innerHTML = `The winner is ${winner}`
        
        saveToLeaderboard("Blue")
    }
}
setInterval(win, 1000)