const historymove=(id1,id2,color)=>{
    const parent=document.querySelector(".history")
    const moves=document.createElement("div")
    moves.className="history-content"
    moves.textContent=`${color} : ${id1.id} to ${id2.id}`
    parent.appendChild(moves)
}
const historyplace=(id,color)=>{
    const parent=document.querySelector(".history")
    const moves=document.createElement("div")
    moves.className="history-content"
    moves.textContent=`${color} : placed at ${id}`
    parent.appendChild(moves)
}
const historyElim=(id,color)=>{
    const parent=document.querySelector(".history")
    const moves=document.createElement("div")
    moves.className="history-content"
    if(color=="red"){
        color="Red"
    }
    else if(color=="blue"){
        color="Blue"
    }
    moves.textContent=`${color} : eliminated at position ${id}`
    parent.appendChild(moves)
}
const historyUndo=(id,color)=>{
    const parent=document.querySelector(".history")
    const moves=document.createElement("div")
    moves.className="history-content"
    if(color=="red"){
        color="Blue"
    }
    else if(color=="blue"){
        color="Red"
    }
    moves.textContent=`${color} : undo at position ${id}`
    parent.appendChild(moves)
}
const historyRedo=(id,color)=>{
    const parent=document.querySelector(".history")
    const moves=document.createElement("div")
    moves.className="history-content"
    if(color=="red"){
        color="Blue"
    }
    else if(color=="blue"){
        color="Red"
    }
    moves.textContent=`${color} : redo at position ${id}`
    parent.appendChild(moves)
}