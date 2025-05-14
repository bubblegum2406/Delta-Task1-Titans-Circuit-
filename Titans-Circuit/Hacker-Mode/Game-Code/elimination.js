const checkElim=()=>{
    const hexElements=document.querySelectorAll(".hex")
    const placedElements = Array.from(hexElements).filter(hex => 
        hex.style.backgroundColor === 'red' || hex.style.backgroundColor === 'blue'
    )

    placedElements.forEach(titan=>{
        const adj_titans=adj.get(titan.id)
        const color=titan.style.background
        let el_count=adj_titans.length
        if(color=="blue"){
            adj_titans.forEach(adjTitan=>{
                const adj=document.getElementById(adjTitan)
                if(adj.style.background=="red"){
                    el_count--
                }
            })
        }
        else if(color=="red"){
            adj_titans.forEach(adjTitan=>{
                const adj=document.getElementById(adjTitan)
                if(adj.style.background=="blue"){
                    el_count--
                }
            })
        }

        if(el_count==0){
            elimSound.play()
            titan.removeAttribute('style')
            index=placed_titan.indexOf(titan.id)
            delete placed_titan[index]
            historyElim(titan.id,color)
        }
        
    })

}