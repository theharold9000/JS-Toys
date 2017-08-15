var answer = prompt("What do you want to cook?").toLowerCase();
var user = answer;

switch(user) {
    case 'cake':
        console.log("That sounds like a good idea")
        break;
    case 'pasta':
        console.log("What kind of sauce?")
        break;
    case 'steak':
        console.log("How do you want it cooked?")
        break;
    case 'breakfast':
        console.log("What do you want for breakfast?")
        break;
    case 'sandwich':
        console.log("What do you want in the sandwich?")
        break;
    default:
        console.log("That isn't something you can cook")
        break;
}