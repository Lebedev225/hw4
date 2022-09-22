


const mathOperation = (userNumberOne, userNumberTwo, userOperation) => {
    if (userOperation == "+") {
        let result = Number(userNumberOne) + Number(userNumberTwo)
        return `${userNumberOne} ${userOperation} ${userNumberTwo} = ${result}`
    }
    else if (userOperation == "-") {
        let result = Number(userNumberOne) - Number(userNumberTwo)
        return `${userNumberOne} ${userOperation} ${userNumberTwo} = ${result}`
    }
    else if (userOperation == "*") {
        let result = Number(userNumberOne) * Number(userNumberTwo)
        return `${userNumberOne} ${userOperation} ${userNumberTwo} = ${result}`
    }
    else if (userOperation == "/") {
        let result = Number(userNumberOne) / Number(userNumberTwo)
        return `${userNumberOne} ${userOperation} ${userNumberTwo} = ${result}`
    }
    else {
        let result = "Invalid Mathematical Operation"
        return `${userNumberOne} ${userOperation} ${userNumberTwo} = ${result}`
    }
}

let userNumberOne = prompt("Enter the first number: ");
let userNumberTwo = prompt("Enter the second number: ");
let userOperation = prompt("Enter the Mathematical Operation: ");
console.log(userOperation)

const actualResult = mathOperation(userNumberOne, userNumberTwo, userOperation)
alert(actualResult)

