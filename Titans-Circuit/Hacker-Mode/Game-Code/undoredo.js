const undobtn=document.querySelector(".undobtn")
const redobtn=document.querySelector(".redobtn")
let redoActivity=[]
undobtn.addEventListener("click",()=>{
    try {
        if(state && count<=8){
    const undoelement=document.getElementById(placed_titan[placed_titan.length-1])
    redoActivity.push(placed_titan[placed_titan.length-1])
    
    placed_titan.pop()
    if(current=="blue"){
        redSound.play()
        current="red"
        currentboard.innerHTML="Red"
        historyUndo(undoelement.id,"Red")
    }
    else if(current=="red"){
        blueSound.play()
        current="blue"
        currentboard.innerHTML="Blue"
        historyUndo(undoelement.id,"Blue")
    }
    count--

    undoelement.removeAttribute("style")
    
} 
else if(state && count>8){
    
    const undoelement=document.getElementById(movement_titan[movement_titan.length-1][1])
    const oldelement=document.getElementById(movement_titan[movement_titan.length-1][0])
    console.log(undoelement,oldelement)
    placed_titan.pop()
    placed_titan.push(oldelement.id)
    
    if(undoelement.style.background=="red"){
        redSound.play()
        current_player="red"
        currentboard.innerHTML="Red"
        historyUndo(undoelement.id,"Red")
        oldelement.style.background="red"
        
    }
    else if(undoelement.style.background=="blue"){
        blueSound.play()
        current_player="blue"
        currentboard.innerHTML="Blue"
        historyUndo(undoelement.id,"Blue")
        oldelement.style.background="blue"
    }
    
    
    undoelement.removeAttribute("style")

    
}
colorConnection()
    } catch (error) {
        
    }
    })

redobtn.addEventListener("click",()=>{
    try {
       if(state && count<=8){
    const redoelement=document.getElementById(redoActivity[redoActivity.length-1])
    redoActivity.pop()
    
    if(current=="blue"){
        blueSound.play()
        current="red"
        redoelement.style.background="blue"
        currentboard.innerHTML="Red"
        historyRedo(redoelement.id,current)
    }
    else if(current=="red"){
        
        redSound.play()
        current="blue"
        redoelement.style.background="red"
        currentboard.innerHTML="Blue"
        historyRedo(redoelement.id,current)
    }
    placed_titan.push(redoelement.id)
    count++
} 
else if(state && count>8){
    const undoelement=document.getElementById(movement_titan[movement_titan.length-1][1])
    const oldelement=document.getElementById(movement_titan[movement_titan.length-1][0])
    console.log(undoelement,oldelement)
    placed_titan.pop()
    placed_titan.push(undoelement.id)
    
    if(oldelement.style.background=="red"){
        redSound.play()
        current_player="red"
        currentboard.innerHTML="Red"
        historyRedo(oldelement.id,"Red")
        undoelement.style.background="red"
        
    }
    else if(oldelement.style.background=="blue"){
        blueSound.play()
        current_player="blue"
        currentboard.innerHTML="Blue"
        historyRedo(undoelement.id,"Blue")
        undoelement.style.background="blue"
    }
    
    
    oldelement.removeAttribute("style")
}
colorConnection()
    } catch (error) {
        
    }
    
    })