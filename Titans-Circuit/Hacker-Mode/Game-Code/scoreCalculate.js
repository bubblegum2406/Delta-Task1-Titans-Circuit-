
const updateScores=(blueScore,redScore)=>{
    document.querySelector('.blue-score').innerHTML = `${blueScore}`
    document.querySelector('.red-score').innerHTML = `${redScore}`
    
}

const reverse_array=['hex12+hex2','hex11+hex4','hex13+hex9','hex15+hex8','hex17+hex7','hex13+hex9','hex10+hex6','hex9+hex13']
const getWeight = (id1, id2) => {
    let key = [id1, id2].sort().join('+')
    if(reverse_array.includes(key)){
        key=[id1,id2].sort((a,b)=>b.localeCompare(a)).join('+')
    }
    return mapWeight.get(key)
  };


const Score_Calculator=()=>{
    const hexElements=document.querySelectorAll(".hex")
    let blueScore=0
    let redScore=0
    

    const placedElements = Array.from(hexElements).filter(hex => 
        hex.style.backgroundColor === 'red' || hex.style.backgroundColor === 'blue'
    );

    
    
    

    placedElements.forEach(titan=>{
        try {
            const adj_id=adj.get(titan.id)
        
        adj_id.forEach(hex_id=>{
            const weight = getWeight(titan.id, hex_id);
            const adj_titan=document.getElementById(hex_id)
            if(titan.style.background=="blue" && adj_titan.style.background=="blue"){
                blueScore =blueScore+(weight)/2
                updateScores(blueScore,redScore)
                
            }
            else if(titan.style.background=="red" && adj_titan.style.background=="red"){
                
                redScore=redScore+(weight)/2
                updateScores(blueScore,redScore)      
            }
        })
        } catch (error) {
            
        } 
    })
}


window.addEventListener('DOMContentLoaded', () => {
    
    
});

hexboard.addEventListener("click",()=>{
    Score_Calculator()
})