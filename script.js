let boxes=document.querySelectorAll(".box");
let resetbutton=document.querySelector(".resetbutton");
let newbutton=document.querySelector(".newbutton");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;

const winPatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxes.forEach((box)=>{
box.addEventListener("click",()=>{

if (turn0){
    box.innerText="O";
    turn0=false;
}
else{
    box.innerText="X";
    turn0=true;
}
box.disabled=true;

checkWinner();

});
});

const checkWinner=()=>{
    for (let pattern of winPatterns){
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;

    if(pos1!=""&&pos2!=""&&pos3!=""){
        if(pos1===pos2&&pos2===pos3){
            console.log("Winner",pos1);
            showWinner(pos1);
           
        }
    }
}
};

const showWinner=(Winner)=>{

    msg.innertext=`congratulations,Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

const disabledBoxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
} 

const resetGame=()=>{
    turn0=true;
    anableBoxes();
    msgContainer.classList.add("hide");
}

const anableBoxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

newbutton.addEventListener("click",resetGame);
resetbutton.addEventListener("click",resetGame);









