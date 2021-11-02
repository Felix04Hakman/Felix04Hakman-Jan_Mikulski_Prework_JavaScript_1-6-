const n = 3;
const calc = [];
let number;
let i;

for(let i = 1; i <= n; i++) {
    calc[i - 1] = [ ];
    for(let j = 1; j <= n; j++) {
        calc[i - 1][j - 1] = i + " x " + j + " = " + (i * j);
    }
}

for(let i = 0; i < n; i++) {
   number[i] = calc[i][0];
    for(let j = 1; j < n; j++) {
        number[i] += " | " + calc[i][j];

    }
    console.log(number[i]);
}
