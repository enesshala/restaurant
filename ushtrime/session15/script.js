// Loops - Ciklet/Unazat
// for, forEach, while, do-while

// for
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i + " * " + j + " = " + i * j);
    }
}

console.log("Cikli perfundoi");

// while
let z = 11;
while (z <= 10) {
    console.log("While - hapi", z);
    z++;
}

// do-while
let y = 11;
do {
    console.log("do-while loop:", y);
    y++;
} while (y <= 10);

// shumezoje secilin numer per 2
let numrat = [1, 2, 3, 4];
for (let i = 0; i < numrat.length; i++) {
    console.log(numrat[i] * 2);
}

numrat.forEach((item) => {
    console.log(item + 2);
});

// shtypni numrat nga 1 deri ne 100 dhe tregoni per secilin a eshte qift apo tek;
for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        console.log("Numer tek:", i);
    } else {
        console.log("Numer qift:", i);
    }
}

// ===================
// Functions - funksionet
function greeting(emri) {
    console.log("Pershendetje", emri);
}

greeting("Enes"); // call of function

function mblidh(num1, num2) {
    console.log(num1 + num2);
}

mblidh(5, 10);

function zbrit(x, y) {
    console.log("x", x);
    console.log("y", y);

    return x - y;

    console.log("Hellloooo");
    
}

let rezultati = zbrit(10, 5);

console.log(rezultati);
