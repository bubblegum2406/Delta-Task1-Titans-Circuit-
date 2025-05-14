const leaderboard=document.querySelector(".leaderboard")
let data=localStorage.getItem("Leaderboard")
data=JSON.parse(data)
data.forEach(element => {
    
    const div=document.createElement("div")
    div.textContent=`${element[0][0]} won on ${element[0][1]}`
    leaderboard.appendChild(div)
    
})