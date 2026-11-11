const container=document.querySelector(".container");
for (let i=0;i<256;i++){
    const div=document.createElement("div");
    div.classList.add("box");
    container.appendChild(div);
}

const boxes=document.querySelectorAll(".box");
boxes.forEach((box)=>{
    box.addEventListener('mouseenter',()=>{
        box.setAttribute("style","background-color:white;");
    })
})