
let home = 0
let guest = 0
document.getElementById("home-score").textContent = home
document.getElementById("guest-score").textContent = guest

let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
//-------------------------------------

function addhome1() {
    home += + 1
    homeScore.textContent = home
}

function addguest1() {
    guest += + 1 
    guestScore.textContent = guest
}
//-------------------------------------
function addhome2() {
    home += + 2
    homeScore.textContent = home
}

function addguest2() {
    guest += + 2 
    guestScore.textContent = guest
}
//-----------------------------------
function addhome3() {
    home += + 3
    homeScore.textContent = home
}

function addguest3() {
    guest += + 3 
    guestScore.textContent = guest
}


function reset() {
    home = 0
    guest = 0
    homeScore.textContent = home
    guestScore.textContent = guest
}

