let current="blue"
let count=0      
const currentboard=document.querySelector(".current")
currentboard.innerHTML="Blue"
const blueConnect=(id1, id2)=> {
    const container = document.querySelector('.hexboard')
    const dot1 = document.getElementById(id1)
    const dot2 = document.getElementById(id2)
    if (!dot1 || !dot2) {
        console.error("One or both elements not found:", id1, id2)
        return
    }
    const rect1 = dot1.getBoundingClientRect()
    const rect2 = dot2.getBoundingClientRect()
    const containerRect = container.getBoundingClientRect()
    const center1 = {
        x: rect1.left + rect1.width / 2 - containerRect.left,
        y: rect1.top + rect1.height / 2 - containerRect.top
    }
    const center2 = {
        x: rect2.left + rect2.width / 2 - containerRect.left,
        y: rect2.top + rect2.height / 2 - containerRect.top
    }
    const angleRad = Math.atan2(center2.y - center1.y, center2.x - center1.x)
    const offset = rect1.width / 2 + 2
    const x1 = center1.x + Math.cos(angleRad) * offset
    const y1 = center1.y + Math.sin(angleRad) * offset
    const x2 = center2.x - Math.cos(angleRad) * offset
    const y2 = center2.y - Math.sin(angleRad) * offset
    const length = Math.hypot(x2 - x1, y2 - y1)
    const angleDeg = angleRad * 180 / Math.PI
    const line = document.createElement('div')
    line.classList.add('line')
    line.style.background="blue"
    line.style.width = `${length}px`
    line.style.left = `${x1}px`
    line.style.top = `${y1}px`
    line.style.transform = `rotate(${angleDeg}deg)`
    container.appendChild(line)
}

const redConnect=(id1, id2)=>{
    const container = document.querySelector('.hexboard')
    const dot1 = document.getElementById(id1)
    const dot2 = document.getElementById(id2)
    if (!dot1 || !dot2) {
        console.error("One or both elements not found:", id1, id2)
        return
    }
    const rect1 = dot1.getBoundingClientRect()
    const rect2 = dot2.getBoundingClientRect()
    const containerRect = container.getBoundingClientRect()
    const center1 = {
        x: rect1.left + rect1.width / 2 - containerRect.left,
        y: rect1.top + rect1.height / 2 - containerRect.top
    }
    const center2 = {
        x: rect2.left + rect2.width / 2 - containerRect.left,
        y: rect2.top + rect2.height / 2 - containerRect.top
    }
    const angleRad = Math.atan2(center2.y - center1.y, center2.x - center1.x)
    const offset = rect1.width / 2 + 2
    const x1 = center1.x + Math.cos(angleRad) * offset
    const y1 = center1.y + Math.sin(angleRad) * offset
    const x2 = center2.x - Math.cos(angleRad) * offset
    const y2 = center2.y - Math.sin(angleRad) * offset
    const length = Math.hypot(x2 - x1, y2 - y1)
    const angleDeg = angleRad * 180 / Math.PI
    const line = document.createElement('div')
    line.classList.add('line')
    line.style.background="red"
    line.style.width = `${length}px`
    line.style.left = `${x1}px`
    line.style.top = `${y1}px`
    line.style.transform = `rotate(${angleDeg}deg)`
    container.appendChild(line)
}

const grayConnect=(id1, id2)=>{
    const container = document.querySelector('.hexboard')
    const dot1 = document.getElementById(id1)
    const dot2 = document.getElementById(id2)
    if (!dot1 || !dot2) {
        console.error("One or both elements not found:", id1, id2)
        return;
    }
    const rect1 = dot1.getBoundingClientRect()
    const rect2 = dot2.getBoundingClientRect()
    const containerRect = container.getBoundingClientRect()
    const center1 = {
        x: rect1.left + rect1.width / 2 - containerRect.left,
        y: rect1.top + rect1.height / 2 - containerRect.top
    }
    const center2 = {
        x: rect2.left + rect2.width / 2 - containerRect.left,
        y: rect2.top + rect2.height / 2 - containerRect.top
    }
    const angleRad = Math.atan2(center2.y - center1.y, center2.x - center1.x)
    const offset = rect1.width / 2 + 2
    const x1 = center1.x + Math.cos(angleRad) * offset
    const y1 = center1.y + Math.sin(angleRad) * offset
    const x2 = center2.x - Math.cos(angleRad) * offset
    const y2 = center2.y - Math.sin(angleRad) * offset
    const length = Math.hypot(x2 - x1, y2 - y1)
    const angleDeg = angleRad * 180 / Math.PI
    const line = document.createElement('div')
    line.classList.add('line')
    line.style.width = `${length}px`
    line.style.left = `${x1}px`
    line.style.top = `${y1}px`
    line.style.transform = `rotate(${angleDeg}deg)`
    container.appendChild(line)
}

const colorConnection =()=>{
    const hexElements = document.querySelectorAll('.hex')
    const placedTitans = Array.from(hexElements).filter(hex => 
        hex.style.backgroundColor === 'red' || hex.style.backgroundColor === 'blue'
    )
    placedTitans.forEach(titan=>{
        try {
            const adj_id=adj.get(titan.id)
        adj_id.forEach(hex_id=>{
            const adj_titan=document.getElementById(hex_id)
            if(titan.style.background=="blue" && adj_titan.style.background=="blue"){
                blueConnect(titan.id,hex_id)
            }
            else if(titan.style.background=="red" && adj_titan.style.background=="red"){
                redConnect(titan.id,hex_id)
            }
            else if(titan.style.background!=adj_titan.style.background){
                grayConnect(titan.id,hex_id)
            }
        })
        } catch (error){     
        }
    }
    )
}
placed_titan=[]
hexboard.addEventListener("click",(event)=>{
    try {
        let hex_id=event.target.id
        if(outer_array.includes(hex_id)){
        
        if(current=="blue" && count<6 && !placed_titan.includes(hex_id) && state==true){
        document.getElementById(hex_id).style.background="blue"
        placed_titan.push(hex_id)
        current="red"
        count++
        currentboard.innerHTML="Red"
                
        }
        else if(current=="red" && count<6 && !placed_titan.includes(hex_id) && state==true){
        document.getElementById(hex_id).style.background="red"
        placed_titan.push(hex_id)
        current="blue"
        count++
        currentboard.innerHTML="Blue"
        }
        colorConnection()
    }
    } catch (error) {   
    }      
})
hexboard.addEventListener("click",(event)=>{
    try {
        let hex_id=event.target.id
        
        if(inner_array.includes(hex_id)){
        if(current=="blue" && !placed_titan.includes(hex_id) && count>=6 && count<8 && state==true){
            document.getElementById(hex_id).style.background="blue"
            placed_titan.push(hex_id)
            current="red"
            count++
            colorConnection()
            currentboard.innerHTML="Red"
                    
            }
        else if(current="red"&& !placed_titan.includes(hex_id) && count>=6 && count<8 && state==true){
            document.getElementById(hex_id).style.background="red"
            placed_titan.push(hex_id)
            current="blue"
            count++
            colorConnection()
            currentboard.innerHTML="Blue"
            }
            
        }   
    } catch (error) {  
    }
})

const repeatCheck=()=>{if(count>=8 && count<9){
    count++
    hexboard.removeEventListener("click",event)
}
}
window.addEventListener('DOMContentLoaded', () => {
    setInterval(repeatCheck,1000)
});

