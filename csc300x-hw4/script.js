var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;

var choices = ["rock", "paper", "scissors"];

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = "./" + choices[i] + ".PNG";
        choice.style.border = "2px solid black";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function addBorder(choice) {
    choice.style.border = "2px solid red";
}

function selectChoice() {
    you = this.id;
    addBorder(this); // Add border color to the selected choice
    document.getElementById("your-choice").src = "./" + you + ".PNG";

    // Show "waiting" for the opponent during the delay
    var opponentImage = document.getElementById("opponent-choice");
    opponentImage.src = ""; // Clear the image
    opponentImage.alt = "Thinking...";
    opponentImage.style.border = "2px solid black"; // Reset the border color

    // Introduce a delay before showing the opponent's choice
    setTimeout(function() {
      var YouImage = document.getElementById("your-choice");
        // Random choice for the opponent
        opponent = choices[Math.floor(Math.random() * 3)];
        document.getElementById("opponent-choice").src = "./" + opponent + ".PNG";

        // Check for the winner
        if (you == opponent) {
         yourScore += 1;
         opponentScore += 1;
         
         YouImage.src = ""; // Clear the image
         YouImage.alt = "Tie";
     }
     else {
         if (you == "rock") {
             if (opponent == "scissors") {
                 yourScore += 1;
                 YouImage.src = ""; // Clear the image
                 YouImage.alt = "You Win";

             }
             else if (opponent == "paper") {
                 opponentScore += 1;
                 YouImage.src = ""; // Clear the image
                 YouImage.alt = "You Lose";
             }
         }
         else if (you == "scissors") {
             if (opponent == "paper") {
                 yourScore += 1;
                 YouImage.src = ""; // Clear the image
                 YouImage.alt = "You Win";
             }
             else if (opponent == "rock") {
                 opponentScore += 1;
                 yourScore += 1;
                 YouImage.src = ""; // Clear the image
                 YouImage.alt = "You Win";
             }
         }
         else if (you == "paper") {
             if (opponent == "rock") {
                 yourScore += 1;
                 YouImage.src = ""; // Clear the image
                 YouImage.alt = "You Win";
             }
             else if (opponent == "scissors") {
                 opponentScore += 1;
                 YouImage.src = ""; // Clear the image
                 YouImage.alt = "You Lose";
             }
         }
     }

        // Update scores
        document.getElementById("your-score").innerText = yourScore;
        document.getElementById("opponent-score").innerText = opponentScore;

        // Reset border colors after the round
        resetBorders();
    }, 3000); // 1000 milliseconds (1 second) delay
}

function resetBorders() {
    // Reset border colors for all choices
    var choiceElements = document.querySelectorAll("#choices img");
    choiceElements.forEach(function(choice) {
        choice.style.border = "2px solid black";
    });
}

function RESET(){
   var YouImage = document.getElementById("your-choice");
   var OpponentImage = document.getElementById("opponent-choice");
   yourScore = 0;
            opponentScore = 0;
            document.getElementById("your-score").innerText = yourScore;
            document.getElementById("opponent-score").innerText = opponentScore;


            // Clear choices
            document.getElementById("your-choice").src = "";
            document.getElementById("opponent-choice").src = "";
            YouImage.src ="./question-mark.PNG";
            OpponentImage.src ="./question-mark.PNG";

}
