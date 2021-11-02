const numbers = [];
const columns = 4;
const rows = 5;

/**
 * Write your code below!
 */

for (let i = 0; i < rows; i++){
    numbers[i] = [];
    for (let j = 0; j < columns; j++) {
        numbers[i][j] = null;
    }
}
console.log(numbers);
const numbers2 = new Array(rows);

for(let i = 0; i < numbers.length; i++) {
    numbers[i] = new Array(columns);
}

console.log(numbers2);

const numbers3 = Array.from(Array(rows), () => new Array(columns));

console.log(numbers3);

const numbers4 =[[],[],[],[],[],[],[],[]];

console.log(numbers4);