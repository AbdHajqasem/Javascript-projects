
let cards=[];
let sum=0;
let hasBlackjack=false;
let isALive=false;
let message="";
let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sum-el");
let cardEl=document.getElementById("card-el");
playerEl=document.getElementById("player-el");
player={
    name:"Abed",
    chips:145
}
playerEl.textContent=player.name+": $"+player.chips;

function getRandomCard(){
    let randomNum=Math.floor(Math.random()*13)+1;
    if(randomNum===1){
        return 11;
    }
    else if(randomNum>10){
        return 10;
    }
    else{
        return randomNum;
    }
}
function startgame(){
    isALive=true;
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    cards=[firstCard,secondCard];
    sum=firstCard+secondCard;
    rendergame();
}
function rendergame(){
    cardEl.textContent="Cards: ";
 sumEl.textContent="Sum: "+sum;
 for(let i=0;i<cards.length;i++){
    cardEl.textContent+=cards[i] +" " ;  
 }
if(sum<=20){
    message=("Do you want to draw a new card?");
}
else if(sum===21){
    message=("You've got a Blackjack");
    hasBlackjack=true;
}
else{
    message=("You're out of the game")
   isALive=false;
}
messageEl.innerText=message;
}
function newcard(){
    if(isALive===true&&hasBlackjack===false){
    let card=getRandomCard();
    sum+=card;
    cards.push(card);
    rendergame();
    }
}
