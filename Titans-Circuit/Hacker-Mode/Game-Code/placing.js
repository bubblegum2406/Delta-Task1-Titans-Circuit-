hexboard.addEventListener("click",(event)=>{
    try {
        let hex_id=event.target.id
        if(outer_array.includes(hex_id)){
        if(current=="blue" && count<8 && !placed_titan.includes(hex_id) && state){
        blueSound.play()
        document.getElementById(hex_id).style.background="blue"
        placed_titan.push(hex_id)
        current="red"
        count++
        currentboard.innerHTML="Red"
        historyplace(hex_id,"Blue")
        historymoves.push(hex_id)      
        }
        else if(current=="red" && count<8 && !placed_titan.includes(hex_id) && state){
        redSound.play()
        document.getElementById(hex_id).style.background="red"
        placed_titan.push(hex_id)
        current="blue"
        count++
        currentboard.innerHTML="Blue"
        historyplace(hex_id,"Red")
        historymoves.push(hex_id)
        }
        colorConnection()
        checkElim()
    }
    } catch (error) {
        
    }  
})
hexboard.addEventListener("click",(event)=>{
    try {
        let hex_id=event.target.id
        if(inner_array.includes(hex_id)){
        if(current=="blue" && !placed_titan.includes(hex_id) && count>=6 && count<8 && state){
            blueSound.play()
            document.getElementById(hex_id).style.background="blue"
            placed_titan.push(hex_id)
            current="red"
            count++
            colorConnection()
            currentboard.innerHTML="Red"
            historyplace(hex_id,"Blue")
            historymoves.push(hex_id)
                    
            }
        else if(current=="red"&& !placed_titan.includes(hex_id) && count>=6 && count<8 && state){
            redSound.play()
            document.getElementById(hex_id).style.background="red"
            placed_titan.push(hex_id)
            current="blue"
            count++
            colorConnection()
            currentboard.innerHTML="Blue"
            historyplace(hex_id,"Red")
            historymoves.push(hex_id)
            }
        }
        checkElim()   
    } catch (error) {
        
    }
})

const repeatCheck=()=>{if(count>=8 && count<9){
    hexboard.removeEventListener("click",event)
}
}
window.addEventListener('DOMContentLoaded', () => {
    
    setInterval(repeatCheck,1000)
});

