// Ky eshte koment
// ne javascript

/*
  Ky eshte 
  nje 
  koment
  ne shume
  rreshte
*/

// Konzola
console.log("Pershendetje!");

// Variablat - var, let, const
var emri = "Enes"; //Deklarimi dhe inicializimi i variables emri me vlere Enes

var mbiemri; // Deklarim

mbiemri = "Shala"; // Inicializimi

console.log(mbiemri);

mbiemri = "Fisteku";

console.log(mbiemri);

let mosha = 27;

console.log(mosha);

let x = 10; // number
let y = "20"; // string

console.log(x + y);

console.log(typeof y);

// String concatination - Bashkangjitja e stringjeve: + dhe ,

let name = "Enes";
let surname = "Shala";
let age = 27;

let a = 5;
let b = 10;
let res = a + b;

console.log(
    "Pershendejte, une jam: " + name + " " + surname + " " + age + " " + res,
);
console.log("Pershendejte, une jam: ", name, surname, age, res);

// Operatoret aritmetik: +, -, /, *, %, ++, --
let c = 10;
let d = 5;

console.log(+c); // postfix numri++, prefix ++numri
console.log(c);

// Operatoret Logjik: and(&&) or(||) not(!)
let moshaAplikuesit = 66;

if (moshaAplikuesit >= 18 && moshaAplikuesit <= 65) {
    console.log("Ju mund te aplikoni per patentshofer");
} else {
    console.log("Ju nuk mund te aplikoni!");
}

let kaBore = false; // boolean
let kaShi = false;

if (kaBore || kaShi) {
    console.log("Merre xhaketen!");
} else {
    console.log("Moti eshte i mire!");
}

let keDetyra = true;

if (!keDetyra) {
    console.log("Mund te dalesh me shoke!");
} else {
    console.log("Perfundo detyrat!");
}

// Data Types: primitive data-types, non-primitive data-types;
//  string, number, boolean, null, undefined, char, object, array,