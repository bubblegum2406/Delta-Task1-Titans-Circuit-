const hexboard=document.querySelector(".hexboard")
let adj=new Map()
adj.set("hex1",["hex2","hex7"])
adj.set("hex2",["hex1","hex12","hex4"])
adj.set("hex12",["hex2","hex18"])
adj.set("hex18",["hex12","hex16","hex17"])
adj.set("hex17",["hex7","hex18"])
adj.set("hex7",["hex1","hex8","hex17"])
adj.set("hex3",["hex5","hex4","hex8"])
adj.set("hex4",["hex2","hex3","hex11"])
adj.set("hex11",["hex10","hex16","hex4"])
adj.set("hex16",["hex15","hex18","hex11"])
adj.set("hex15",["hex8","hex16","hex13"])
adj.set("hex8",["hex7","hex15","hex3"])

adj.set("hex5",["hex3","hex6","hex9"])
adj.set("hex6",["hex5","hex10"])
adj.set("hex10",["hex6","hex11","hex14"])
adj.set("hex14",["hex10","hex13"])
adj.set("hex13",["hex9","hex15","hex14"])
adj.set("hex9",["hex5","hex13"])

const mapWeight=new Map()

mapWeight.set('hex1+hex2',1)
mapWeight.set('hex1+hex7',2)
mapWeight.set('hex2+hex12',2)
mapWeight.set('hex3+hex4',6)
mapWeight.set('hex3+hex8',5)
mapWeight.set('hex4+hex11',4)
mapWeight.set('hex5+hex6',8)
mapWeight.set('hex5+hex9',8)
mapWeight.set('hex6+hex10',9)
mapWeight.set('hex9+hex13',9)
mapWeight.set('hex10+hex14',8)
mapWeight.set('hex13+hex14',8)
mapWeight.set('hex8+hex15',4)
mapWeight.set('hex11+hex16',5)
mapWeight.set('hex15+hex16',6)
mapWeight.set('hex7+hex17',3)
mapWeight.set('hex12+hex18',1)
mapWeight.set('hex17+hex18',1)

mapWeight.set('hex7+hex8',1)
mapWeight.set('hex2+hex4',1)
mapWeight.set('hex16+hex18',1)
mapWeight.set('hex3+hex5',1)
mapWeight.set('hex13+hex15',1)
mapWeight.set('hex10+hex11',1)


let outer_array=["hex1","hex2","hex7","hex12","hex17","hex18"]
let inner_array=["hex3","hex4","hex8","hex11","hex15","hex16"]
let innerMostArray=["hex5","hex6","hex10","hex14","hex9","hex13"]


let state=true
const pauseBtn=document.querySelector(".pausebtn")
const resumeBtn=document.querySelector(".resumebtn")
const resetBtn=document.querySelector(".resetbtn")

pauseBtn.addEventListener("click",()=>{
    state=false
    pauseBtn.style.display="none"
    resumeBtn.style.display="block"
})
resumeBtn.addEventListener("click",()=>{
    state=true
    resumeBtn.style.display="none"
    pauseBtn.style.display="block"
})

function connect(id1, id2, weight) {
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
    if (weight !== "") {
        const label = document.createElement('div')
        label.textContent = weight
        label.style.position = 'absolute'
        label.style.left = `${(x1 + x2) / 2}px`
        label.style.top = `${((y1 + y2) / 2)+19}px`
        label.style.transform = `translate(-50%, -50%)`
        label.style.color = 'white'
        label.style.fontSize = '20px'
        label.style.fontWeight = 'bold'
        label.style.zIndex = '5'
        container.appendChild(label)
    }
    container.appendChild(line)
}

const Lines=()=>{
    connect('hex1', 'hex2',1)
    connect('hex1', 'hex7',2)
    connect('hex2', 'hex12',2)
    connect('hex3', 'hex4',6)
    connect('hex3', 'hex8',5)
    connect('hex4', 'hex11',4)
    connect('hex5', 'hex6',8)
    connect('hex5', 'hex9',8)
    connect('hex6', 'hex10',9)
    connect('hex9', 'hex13',9)
    connect('hex10', 'hex14',8)
    connect('hex13', 'hex14',8)
    connect('hex8', 'hex15',4)
    connect('hex11', 'hex16',5)
    connect('hex15', 'hex16',6)
    connect('hex7', 'hex17',3)
    connect('hex12', 'hex18',1)
    connect('hex17', 'hex18',1)
    connect('hex7', 'hex8',1)
    connect('hex2', 'hex4',1)
    connect('hex16', 'hex18',1)
    connect('hex3', 'hex5',1)
    connect('hex13', 'hex15',1)
    connect('hex10', 'hex11',1)
    connect('hex3', 'hex8',1)
}
window.addEventListener('DOMContentLoaded', () => {
    Lines()    
})

let current="blue"
let count=0      

const currentboard=document.querySelector(".current")
currentboard.innerHTML="Blue"


const blueConnect=(id1, id2)=>{
    const container = document.querySelector('.hexboard')
    const dot1 = document.getElementById(id1)
    const dot2 = document.getElementById(id2)

    if (!dot1 || !dot2) {
        
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
    container.appendChild(line);
}

const grayConnect=(id1, id2)=>{
    const container = document.querySelector('.hexboard')
    const dot1 = document.getElementById(id1)
    const dot2 = document.getElementById(id2)
    if (!dot1 || !dot2) {
        
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
    const offset = rect1.width / 2 + 2; 
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
        } catch (error) {
            
        }
        

    }
    )
}
blueSound=new Audio("./mixkit-game-ball-tap-2073.wav")
redSound= new Audio("./mixkit-player-jumping-in-a-video-game-2043.wav")
elimSound=new Audio("./mixkit-winning-a-coin-video-game-2069.wav")
winSound=new Audio("./mixkit-completion-of-a-level-2063.wav")

placed_titan=[]

historymoves=[]


