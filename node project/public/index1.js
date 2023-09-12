const cards = document.querySelectorAll('.cards');

let moves = 0;
let seconds = 0;
let mins = 0;
let sec;
let minutes;

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

let count = 0;
let timer;
function start(){

    cards.forEach(card => card.addEventListener('click', flipCard));

    timer = setInterval(()=>{
        seconds+=1;
        if(seconds==60){
            mins+=1;
            seconds = 0;
        }
        sec = seconds;
        minutes = mins;
        if(seconds<10){
            sec = `0${seconds}`;}
        if(minutes<10){
            minutes = `0${mins}`;
        }
        document.getElementById("timer").innerText ="Timer : "+ minutes+" : "+sec;
    },1000);
}

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  secondCard = this;
  moves+=1;
  document.getElementById("moves").innerText =(moves>10)?"Moves : "+moves:"Moves : 0"+moves ;
  lockBoard = true;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.fruit === secondCard.dataset.fruit;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    count+=1
    if(count===8){
        clearInterval(timer);
        popWin();
    }
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
 cards.forEach(card => {
   let ramdomPos = Math.floor(Math.random() * 12);
   card.style.order = ramdomPos;
 });
})();

function popWin() {
    alert(`You have won!!! 
    Moves:${moves} 
    Timer:${minutes} : ${sec}`);
    location.reload();
}
function reset(){
    if(confirm("Reset the Game?")) {location.reload();}
}