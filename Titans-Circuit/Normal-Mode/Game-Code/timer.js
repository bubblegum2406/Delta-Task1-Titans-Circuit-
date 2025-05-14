let blueTimes = 15 
let timerb; 
function blueTimer() {
    if(current=="blue" && state==true){
    document.querySelector(".red-timer").innerHTML="15"
    const sec = blueTimes % 60
    document.querySelector(".blue-timer").innerHTML = `${sec}`
    blueTimes--
    redTimes=30
    }
    if (blueTimes < 0) {
        clearInterval(timerb)     
    }
}

let redTimes = 15
let timerr
function redTimer() {
    if(current=="red" && state==true){
       document.querySelector(".blue-timer").innerHTML="15"
       const sec = redTimes % 60
       document.querySelector(".red-timer").innerHTML = `${sec}`
       redTimes--
       blueTimes=30
    }
    if (redTimes < 0) {
        clearInterval(timerr)  
    }
}
resetBtn.addEventListener("click",()=>{
    window.location.reload()
})
window.addEventListener('DOMContentLoaded', () => {
    blueTimer()
    redTimer()
    timerb = setInterval(blueTimer, 1000)
    timerr=setInterval(redTimer,1000)
});
