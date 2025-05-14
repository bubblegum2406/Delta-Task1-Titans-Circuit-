current_player=current
const Movement = (main_id) => {    
    const adj_ids = adj.get(main_id)
    const clickHandler = (event) => {
        const clicked_id = event.target.id
        if (adj_ids.includes(clicked_id)) {
            const newPlace = document.getElementById(clicked_id)
            const oldPlace = document.getElementById(main_id)
            if(newPlace.style.background==="" && oldPlace.style.background==current_player){
            newPlace.style.background = oldPlace.style.background
            oldPlace.style.background = ""
            Lines()
            colorConnection()
            Score_Calculator()
            if(current_player=="blue"){
                current_player="red"
                currentboard.innerHTML="Red"
                current=current_player     
            }
            else if(current_player=="red"){
                current_player="blue"
                currentboard.innerHTML="Blue"
                current=current_player      
            }  
            }
            hexboard.removeEventListener("click", clickHandler)
        }
    }
    hexboard.addEventListener("click", clickHandler)
}
hexboard.addEventListener("click", (event) => {
    const hex_id = event.target.id
    const hex = document.getElementById(hex_id)
    try {
        if ((hex.style.background === "blue" || hex.style.background === "red") && count>8 && state==true) {
        Movement(hex_id)     
    }  
    } catch (error) {
        
    }
    
    hexboard.removeEventListener("click",event)
})