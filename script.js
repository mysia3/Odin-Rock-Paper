console.log("Hello bean")

function getComputerChoice() {
    let an =  Math.random()

    if (an <= 0.33) {
        return "Rock"
    } else if (an <= 0.66) {
        return "Paper"
    } else {
        return "Scissors"
    }
}
function getHumanChoice() {
    let a = prompt("Enter your choice: ")
    return a
}
let hscore = 0, cscore = 0;

function playRound(human,com) {
    // console.log(human);
    h = human.toLowerCase();
    c = com.toLowerCase();
    if (h == c) {
        console.log(`Tied! Both picked ${human}`);
    } else {
    if (h === "rock") {
        if ( c == "paper") {
            cscore += 1;
            console.log("You lose! Paper beats rock");
        } else if (c == "scissors") {
            hscore += 1;
            console.log("You win! Rock beats Scissors");
        }
    } else if (h == "paper") {
        if (c == "scissors") {
            cscore++;
            console.log("You lose! Scissors beats paper");
        } else if (c == "rock") {
            hscore++;
            console.log("You win! Paper beats Rock");
        }
    } else if (h == "scissors") {
        if (c == "rock") {
            cscore++;
            console.log("You lose! Rock beats scissors")
        } else if (c = "paper") {
            hscore++;
            console.log("You win! Scissors beats paper");
        }
    } else {
        console.log("wrong input")
    }
}
}

function playGame() {
    let keepGoing = true
    while (keepGoing) {
    playRound(getHumanChoice(),getComputerChoice())
    console.log(`Your score: ${hscore}, Computer score: ${cscore}`)
let co = hscore + cscore;

    if (co >= 5) {
        keepGoing = false
    }
    }
}

playGame()
















// console.log(getComputerChoice())

// console.log(getHumanChoice())

// playRound(getHumanChoice(),getComputerChoice());







