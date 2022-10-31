console.log("Hello Objects");

let hobbits = [
  {
    name: "Frodo",
  },
  {
    name: "Sam",
  },
  {
    name: "Pippin",
  },
  {
    name: "Merry",
  },
];

console.log(hobbits);

//Total length of hobbit names
let total = 0;

for (let i = 0; i < hobbits.length; i++) {
  total = +hobbits[i].name.length;
}

console.log(`Total characters in hobbit names: ${total}`);

let str = "Hello World";

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

//split:string to an array
let characters = str.split(""); //takes seperator
console.log(characters);

//join: array to a string
let sentence = characters.join(""); //takes seperator
console.log(sentence);

function reverseStr(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

let test1 = reverseStr("Hello World");
let test2 = reverseStr("Harrison Fangmeier");

console.log(test1, test2);
