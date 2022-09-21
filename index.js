var val = document.querySelector(".val");

const neg = document.querySelector(".neg");
const reset = document.querySelector(".reset");
const pos = document.querySelector(".pos");

var num = 0;

neg.addEventListener("click", ()=>{
    num--;
    updateVal()
})

reset.addEventListener("click", ()=>{
    num = 0;
    updateVal()

})

pos.addEventListener("click", ()=>{
    num++;
    updateVal()
})

function updateVal(){
    val.textContent = num;
}