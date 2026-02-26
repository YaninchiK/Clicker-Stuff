let countH = 0
let countG = 0
let countElHome = document.getElementById("home-score")
let countElGuest = document.getElementById("guest-score")

function homePlusOne() {
    countH += 1
    countElHome.innerText = countH
}
function homePlusTwo() {
    countH += 2
    countElHome.innerText = countH
}
function homePlusThree() {
    countH += 3
    countElHome.innerText = countH
}

function guestPlusOne() {
    countG += 1
    countElGuest.innerText = countG 
}
function guestPlusTwo() {
    countG += 2
    countElGuest.innerText = countG
}
function guestPlusThree() {
    countG += 3
    countElGuest.innerText = countG 
}

function resetGame(){
    countH = 0
    countG = 0
    countElHome.innerText = countH
    countElGuest.innerText = countG
}