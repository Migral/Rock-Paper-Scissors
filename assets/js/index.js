let machinePoints = 0; 
let userPoints = 0; 

const options = ["r", "p", "s"]; // Machine options to choose.
const phrasesResult = ["You Win!", "You Loose!", "It's a tie!"];

const imgDisplayNone = document.getElementById("machinePicture");

function startGame() { // Function which is linked to the introduction button.
  setTimeout(function () {
    const setDisplayNone = document.getElementById("game-section-introduction");
    const setDisplayGrid = document.getElementById("game-section-main");

    setDisplayNone.style.display = "none";
    setDisplayGrid.style.display = "grid";
  }, 3000);
}

function restartGame() { // Function which is linked to the restart button.
  imgDisplayNone.classList.add("disp-none")
  document.getElementById("imgChange").src="";

  document.getElementById("userPointsText").innerHTML = 0;
  document.getElementById("machinePointsText").innerHTML = 0;
  document.getElementById("phrasesResult").innerHTML = "";
  
  machinePoints = 0;
  userPoints = 0;
}

function randomOption() { // Determinates a random option to give to the machine.
  let randomOptionNumber = Math.floor(Math.random() * 3);
  return options[randomOptionNumber];
}

function machinePictureElection(machineSelection) { // Add the image of RPS based on what the machine has chosen.
  imgDisplayNone.classList.add("disp-flex");
  imgDisplayNone.classList.remove("disp-none");
  
  switch (machineSelection) {
    case 'r':
        document.getElementById("imgChange").src="assets/img/piedra.png";
      break;

    case 'p':
        document.getElementById("imgChange").src="assets/img/papel.png";
      break;

    case 's':
        document.getElementById("imgChange").src="assets/img/tijera.png";
      break;
  }
}

function evaluateResult(userSelection) { // Determinates the result of each game by clicking an image.
  let machineSelection = randomOption();

  machinePictureElection(machineSelection);
  if (userSelection == machineSelection) {
    document.getElementById("phrasesResult").innerHTML = phrasesResult[2]; // Inner Text TIE phrase.
    
  } else if (
    (userSelection == "r" && machineSelection == "s") ||
    (userSelection == "p" && machineSelection == "r") ||
    (userSelection == "s" && machineSelection == "p")
  ) {
    document.getElementById("phrasesResult").innerHTML = phrasesResult[0]; 
    userPoints++;                                                           // Sum USER points.
    document.getElementById("userPointsText").innerHTML = userPoints;   
  } else {
    document.getElementById("phrasesResult").innerHTML = phrasesResult[1]; 
    machinePoints++;
    document.getElementById("machinePointsText").innerHTML = machinePoints; 
  }


}
