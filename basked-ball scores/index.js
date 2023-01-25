let scoreHomeEl = document.getElementById("score-home-el");
let scoreGuestEl = document.getElementById("score-guest-el");
let refresh = document.getElementById("refresh");
let countHome = 0;
let countGuest = 0;
console.log(scoreHomeEl);
function plusOneHome() {
      countHome +=1;
      scoreHomeEl.textContent = countHome;
}
function plusTwoHome() {
    countHome +=2;
    scoreHomeEl.textContent = countHome;
}
function plusThreeHome() {
    countHome +=3;
    scoreHomeEl.textContent = countHome;
}

function plusOneGuest() {
    countGuest +=1;
    scoreGuestEl.textContent = countGuest;
}
function plusTwoGuest() {
    countGuest +=2;
    scoreGuestEl.textContent = countGuest;
}
function plusThreeGuest() {
    countGuest +=3;
    scoreGuestEl.textContent = countGuest;
}
function refreshPage(){
    window.location.reload();
} 
