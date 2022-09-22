let magicNumber = Math.floor(Math.random() * 100) + 1;
let userNumber = Number(prompt("Enter your guess(1-100): "))
let numberOfGuesses = 1

while (userNumber != magicNumber) {
    if (userNumber < magicNumber) {
        alert("Too low, guess again")
        userNumber = Number(prompt("Enter your guess: "))
    }
    else {
        alert("Too high, guess again")
        userNumber = Number(prompt("Enter your guess: "))
    }
    numberOfGuesses++
}


alert(`Correct!  It took you ${numberOfGuesses} attempts to guess the correct number.`)
