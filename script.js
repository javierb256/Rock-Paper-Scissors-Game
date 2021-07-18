const rock = 0;
const paper = 1;
const scissors = 2;
const winPicture = document.getElementById("winPicture");
const lostPicture = document.getElementById("lostPicture");
const drawPicture = document.getElementById("drawPicture");
const vsPicture = document.getElementById("vsPicture");
const rockPicture = document.getElementById("rockPicture");
const paperPicture = document.getElementById("paperPicture");
const scissorsPicture = document.getElementById("scissorsPicture");
const rockPicture2 = document.getElementById("rockPicture2");
const paperPicture2 = document.getElementById("paperPicture2");
const scissorsPicture2 = document.getElementById("scissorsPicture2");

//rests the page for a new game
function reset(){
    winPicture.style.display = "none";
    lostPicture.style.display = "none";
    drawPicture.style.display = "none";
    rockPicture.style.display = "none";
    paperPicture.style.display = "none";
    scissorsPicture.style.display = "none";
    rockPicture2.style.display = "none";
    paperPicture2.style.display = "none";
    scissorsPicture2.style.display = "none";
}

//functions for different results
function winner(){winPicture.style.display = "block"};
function lost(){lostPicture.style.display="block"};
function draw(){drawPicture.style.display="block"};


//conditional statements when player chooses rock
function rockFunction(){
    reset();
    const computerRoll = Math.floor(Math.random() * 3);
    if(computerRoll === scissors) {
        rockPicture.style.display = "block";
        vsPicture.style.display = "block";
        scissorsPicture2.style.display = "block";
        winner();

    } else if (computerRoll === paper) {
        rockPicture.style.display = "block";
        vsPicture.style.display = "block";
        paperPicture2.style.display = "block";
        lost();
    } 
    else {
        rockPicture.style.display = "block";
        vsPicture.style.display = "block";
        rockPicture2.style.display = "block";
        draw();
    }    
}

//conditional statements when player chooses paper
function paperFunction(){
    reset();
    const computerRoll = Math.floor(Math.random() * 3);
    if(computerRoll === rock) {
        paperPicture.style.display = "block";
        vsPicture.style.display = "block";
        rockPicture2.style.display = "block";
        winner();
    } else if (computerRoll === scissors) {
        paperPicture.style.display = "block";
        vsPicture.style.display = "block";
        scissorsPicture2.style.display = "block";
        lost();
    } 
    else {
        paperPicture.style.display = "block";
        vsPicture.style.display = "block";
        paperPicture2.style.display = "block";
        draw();
    }
    
}

//conditional statements when player chooses scissors
function scissorsFunction(){
    reset();
    const computerRoll = Math.floor(Math.random() * 3);
    if(computerRoll === paper) {
        scissorsPicture.style.display = "block";
        vsPicture.style.display = "block";
        paperPicture2.style.display = "block";
        winner();
    } else if (computerRoll === rock) {
        scissorsPicture.style.display = "block";
        vsPicture.style.display = "block";
        rockPicture2.style.display = "block";
        lost();
    } 
    else {
        scissorsPicture.style.display = "block";
        vsPicture.style.display = "block";
        scissorsPicture2.style.display = "block";
        draw();
    }
    
}