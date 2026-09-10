const name = "Eetu";
let age = 22;
const favouriteAnimal = "Kissa";


console.log(name);
console.log(age);
console.log(favouriteAnimal);


const sentence = `Hei! Nimeni on ${name} ja lempieläimeni on ${favouriteAnimal}.`;
console.log(sentence);


const userName = prompt("Mikä on nimesi?");
console.log(`Hei ${userName}! Tervetuloa JavaScriptin maailmaan!`);


const userAgeInput = prompt("Kuinka vanha olet?");
const userAge = Number(userAgeInput);


if (userAge >= 18) {
  console.log("Olet aikuinen.");
} else {
  console.log("Olet alaikäinen.");
}


const userAnimal = prompt("Mikä on lempieläimesi?");
console.log(`Hienoa, ${userName}! Sinun lempieläimesi on ${userAnimal}.`);


function greetUser(name) {
  console.log("Hei " + name + "!");
}


greetUser(userName);


const helloButton = document.getElementById("helloButton");


helloButton.addEventListener("click", function () {
  alert("JavaScript toimii! Nappia painettu.");
  console.log("Nappia painettu – JS on yhdistetty sivuun.");
});