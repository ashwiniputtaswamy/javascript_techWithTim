const prompt = require("prompt-sync")()
const name = prompt("What is your name? ")
console.log("Hello,", name, "welcome to our game!")

const shouldWePlay = prompt('Do you want to play? ')

if (shouldWePlay.toLowerCase() === "yes" || shouldWePlay === 'y') {
    // Game logic
    const leftOrRight = prompt("You enter a maze, do you want to go left or right? ").toLowerCase()
    if (leftOrRight === "left") {
        console.log("You go left and see a bridge...")
        const cross = prompt("Do you want to cross the bridge? ").toLowerCase()
        if (cross === "yes" || cross === "y" || cross === "okay"){
            console.log("You cross but the bridge was weak and broke and you fell. You lost...")
        }
        else{
            console.log("Good choice...You win")
        }
    } 
    else {
        console.log("you go right and fall off a cliff...")
    }
} 
else if (shouldWePlay.toLowerCase() === "no") {
    console.log("Okay :( see you later")
}
else {
    console.log("Invalid input...")
}
