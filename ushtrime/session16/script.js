// Array methods

let numrat = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numrat);

// forEach()
numrat.forEach((numer) => console.log(numer));

// map()

const listaEDyfishuar = numrat.map((numri) => numri * 2);
console.log(listaEDyfishuar);

// filter()
const numratQift = numrat.filter((numri) => numri % 2 === 0);
console.log(numratQift);
const numratTek = numrat.filter((numri) => numri % 2 !== 0);
console.log(numratTek);

// reduce()
const totali = numrat.reduce((totali, numri) => totali + numri);
console.log(totali);

const produktet = [
    {
        emri: "Laptop",
        qmimi: 1200,
    },
    {
        emri: "Tablet",
        qmimi: 800,
    },
    {
        emri: "IPhone",
        qmimi: 1500,
    },
    {
        emri: "Smartwatch",
        qmimi: 500,
    },
];

const shumaTotale = produktet
    .filter((produkti) => produkti.qmimi > 600)
    .reduce((totali, produkti) => totali + produkti.qmimi, 0);
console.log(shumaTotale);

const person = {
    name: "Enes",
    surname: "Shala",
    fullName: function () {
        return `${this.name} ${this.surname}`;
    },
};

console.log(person.fullName());

// DOM - Document Object Model
document.getElementById("message").innerHTML = "<h2>Pershendetje</h2>";
document.getElementsByTagName("h3");
document.getElementsByClassName("box");

document.querySelector(".box").style.color = "red";
const boxes = document.querySelectorAll(".box");

const mesazhi = document.getElementById("message");
const butoni = document.getElementById("kliko");

butoni.addEventListener("click", () => {
    mesazhi.innerHTML = "<h1>Teksti u ndryshua</h1>";
});

let lista = document.getElementById("lista");
let newItem = document.createElement("li");
newItem.textContent = "Elementi 1";
lista.appendChild(newItem);

const inputBox = document.getElementById("text");

const addNew = document.getElementById("shto");

addNew.addEventListener("click", () => {
    let elementiIRi = document.createElement("li");
    elementiIRi.textContent = inputBox.value;
    lista.appendChild(elementiIRi);
    inputBox.value = "";
});

// const output = document.getElementById("output")

// inputBox.addEventListener("input", (e) => {
//   output.textContent = e.target.value;
// })
