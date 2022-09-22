const values = [3, 11, 7, 2, 9, 10];
let total = 0
for (let i = 0; i < values.length; i++) {
    total = total + values[i]
}

console.log(`Sum is: ${total}`);


let min = values[0]
for (let i = 0; i < values.length; i++) {
    if (values[i] < min) {
        min = values[i];
    }
}

console.log(`Minimum value is: ${min}`)

let max = values[0]
for (let i = 0; i < values.length; i++) {
    if (values[i] > max) {
        max = values[i];
    }
}

console.log(`Maximum value is: ${max}`)