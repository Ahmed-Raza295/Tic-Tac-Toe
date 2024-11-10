let btn = document.querySelectorAll(".btn");
let turn = true;
let winingTitle = document.querySelector(".winner");
let newBtn = document.querySelector(".new-game");
let count = 0;
const winPattern = [
[0,1,2],
[0,4,8],
[0,3,6],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
]

btn.forEach((value)=>{
let button = value
button.addEventListener("click",()=>{
    if(turn){
        button.innerHTML = "O"
        turn = false
    }else{
        button.innerHTML = "X"
        turn = true
    }
    value.disabled = true
    count++;    
    checkWinner()

})
})

function showwinner (winner){
    winingTitle.classList.remove("hide")
winingTitle.innerHTML = `Cogragulation Winner is <span>${winner}</span>`
newBtn.style.display = "block"
for(let box of btn){
    box.disabled = true
}
}

function checkWinner (){
for(let pattern of winPattern){
let post1 = btn[pattern[0]].innerText;
let post2 = btn[pattern[1]].innerText;
let post3 = btn[pattern[2]].innerText;
if(post1 !== "" && post2 !== "" && post3 !== ""){
    if(post1 === post2 && post2 === post3){
    let winner = post1 
        showwinner(winner)
} else if(count === 9 ){
    winingTitle.innerText = `Match is Draw`
}
}
}
}

newBtn.addEventListener("click",()=>{
for(let box of btn){
box.disabled = false;
box.innerHTML = ""
winingTitle.classList.add("hide")
}
})