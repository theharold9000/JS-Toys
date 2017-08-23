var answer = prompt("What do you want to cook?").toLowerCase();
var user = answer;

switch(user) {
    case 'cake':
        var cakeChoice = prompt("What kind of cake?").toLowerCase();
            if (cakeChoice === "chocolate") {
                console.log("How sweet will it be?...");
            }
            else {
                console.log("It should have a filling!");
            }
        break;
    case 'pasta':
        var pastaSauce = prompt("Red or white sauce?").toLowerCase();
        var pastaProtein = prompt("Seafood, beef or chicken?").toLowerCase();
            switch(pastaProtein) {
                case (pastaProtein === "seafood" && pastaSauce === ("red" || "red sauce")):
                console.log("Sounds like you're making marinara!");
                break;

                case (pastaProtein === ("beef" || "chicken") && pastaSauce === ("red" || "red sauce")):
                console.log("Sounds like you're making ragu!");
                break;

                case (pastaProtein === ("beef" || "chicken") && pastaSauce === ("white" || "white sauce")):
                console.log("Sounds like you're making carbonara!");
                break;
                
                default:
                console.log("Not sure about that but okay!")
                break;
            }
        break;
    case 'steak':
        var steakCooking = prompt("How do you want it cooked?").toLowerCase();
        break;
    case 'breakfast':
        var breakfastEggs = prompt("Do you want something with eggs?").toLowerCase();
        break;
    case 'sandwich':
        console.log("What do you want in the sandwich?")
        break;
    default:
        console.log("That isn't something you can cook")
        break;
}