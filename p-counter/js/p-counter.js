let saveEl=document.getElementById("pr");
let count=0;
let countEL=document.getElementById("count");
console.log(countEL);
function increment(){
    count+=1;
    countEL.innerText=count;
}
function save(){
let countStr=countEL.innerText+" - ";
saveEl.textContent+=countStr;
countEL.innerText=0;
count=0;
}

