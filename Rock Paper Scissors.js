var userChoice = prompt("Do you choose rock, paper or scissors?")
var computerChoice = Math.random()

if (0 < computerChoice < 0.33){
    var computerChoce = "rock";
}
else if (0.34 < computerChoice < 0.66){
    var computerChoice = "paper";
}
else {
    var computerChoice = "scissors";
}

var compare = function(choice1, choice2){
    if (choice1 === choice2);
    return ("The result is a tie!");
    else if (choice1 === "rock"){
        if (choice2 === "scissors"){
            return ("rock wins")
        }
        else {
            return ("paper wins")
        }
        }
    }
}