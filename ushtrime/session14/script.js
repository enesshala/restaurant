// Operatoret e krahasimit: <, <=, >, >=, ==, ===, !=, !==
// Outputi eshte boolean: true, false (1, 0);

console.log(5 === "5");

//  string, number, boolean, null, undefined, char, array, object
let a = 1; // number
let b = -1; // number
let c = 3.14; // float or double
let d = "Enes"; // string
let e = false; // boolean
let f = undefined;
let isSnowing = true;

console.log(typeof f);

// Arrays - listat, 0 based index (max index 3), (length 4)
let frutat = ["Molla", "Dardha", "Pjepri", "Pjeshka"];
//               0        1         2         3        ....

console.log(frutat.length - 1);

console.log(frutat[2]);

let lista = ["Molla", 200, true, [1, 2, 3]];
console.log(lista);

// Matrice 3x3
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(matrix[2][0]);

// Objects - objekt - {key: value};

let person = {
    emri: "Enes",
    mbiemri: "Shala",
    mosha: 27,
    iPunesuar: true,
    njohurite: ["HTML", "CSS", "JavaScript", "React"],
    laptopi: {
        makra: "Alienware",
        modeli: "2026",
    },
};

console.log(person.emri, person.mbiemri);

console.clear();

let make = ["Mercedes", "BMW", "Audi", "Skoda"];
console.log(make);

make.pop();
console.log(make);

make.push("Volvo", "Peugeot");
console.log(make);

make.shift();
console.log(make);

make.unshift("Mercedes Benz");
console.log(make);

make[1] = "Fiat panda";
console.log(make);

delete make[make.length - 1];
console.log(make);

console.clear();

// Conditionals - kushtet
// 3 types of conditionals:

// 1: if-else conditions
let isRaining = false;
let snowing = false;

if (isRaining) {
    console.log("Open ombrella");
} else {
    console.log("Close ombrella");
}

if (isRaining) {
    console.log("Open ombrella");
} else if (snowing) {
    console.log("Put on Jacket, it's snowing");
} else {
    console.log("Sunny day");
}

let isLampWorking = false;
let isLampPluggedId = true;
let isBulbBurnedOut = false;

if (!isLampPluggedId) {
    console.log("Plug in lamp");
} else if (isBulbBurnedOut) {
    console.log("Replace bulb");
} else {
    console.log("Repair lamp");
}

let ditet = [
    "E hene",
    "E marte",
    "E merkure",
    "E enjte",
    "E premte",
    "E shtune",
    "E diele",
];

let dita = "E shtune";

if (dita === ditet[0]) {
    console.log("Sot eshte e hene, Eshte dite pune");
} else if (dita === ditet[1]) {
    console.log("Sot eshte e marte, dite pune");
} else if (dita === ditet[2]) {
    console.log("Sot eshte e merkure, dite pune");
} else if (dita === ditet[3]) {
    console.log("Sot eshte e enjte, dite pune");
} else if (dita === ditet[4]) {
    console.log("Sot eshte e premte, dite pune");
} else if (dita === ditet[5] || dita === ditet[6]) {
    console.log("Eshte vikend");
} else {
    console.log("Keni dhene diten gabim!");
}

if (
    dita === ditet[0] ||
    dita === ditet[1] ||
    dita === ditet[2] ||
    dita === ditet[3] ||
    dita === ditet[4]
) {
    console.log(`Sot eshte ${dita}, eshte dite pune.`);
} else if (dita === ditet[5] || dita === ditet[6]) {
    console.log(`Eshte ${dita}, dite vikendi`);
} else {
    console.log("Keni dhene diten gabim!");
}

// 2. Switch
switch (dita) {
    case "E hene":
        console.log("Eshte e hene");
        break;
    case "E marte":
        console.log("Eshte e marte");
        break;
    case "E shtune":
    case "E ditele":
        console.log("Dite vikendi");
        break;
    default:
        console.log("Eshte dhene dita gabim");
}
