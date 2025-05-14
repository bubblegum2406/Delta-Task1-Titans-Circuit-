const layout = [
    [null,null,null,"-",null,null,null,null,"-",null,null, null],
    [null,null,null,null,"-",null, null,"-",null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null, null],
    [null,null,null,null,null,"-","-",null,null,null,null, null],
    ["-", null,"-", null,"-",null,null,"-",null,"-",null,"-"], 
    [null,null,null,null,null,"-","-",null,null,null,null, null],
    [null,null,null,null,null,null,null,null,null,null,null, null],
    [null,null,null,null,"-",null, null,"-",null,null,null,null],
    [null,null,null,"-",null,null,null,null,"-",null,null, null],   
  ]
const grid=document.querySelector(".hexboard")
let cellCount=1
layout.forEach(row=>{
    row.forEach(cell=>{
        const div=document.createElement("div")
        if(cell=="-"){
            div.className="hex"
            div.id="hex"+cellCount  
            cellCount=cellCount+1   
        }
        else{
            div.className="nothex"
            div.id="empty"
        }
        grid.appendChild(div)
    })
})