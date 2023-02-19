function myName() {
  console.log("My name is ", "Aida ", "Edigeeve ");
}
myName();

function coneVolume(h, r) {
  let volum = (1 / 3) * h * r;
  console.log(volum);
}
coneVolume(12, 6);

function getStringLength(str) {
  return str.length;
}
let myString = "Привет, мир!";
let stringLength = getStringLength(myString);
console.log(stringLength); // выведет 13

function number(a) {
  if (a % 2 === 0) {
    console.log("this number is even");
  } else if (a % 2 !== 0) {
    console.log("this number is not even");
  }
}
number(43);

function squareNumber(a) {
  return a * a;
}
console.log(squareNumber(9));



// Math.sqrt(25);

function perimeter(a,b,c,d,e){
  return a + b + c + d + e
}
console.log(perimeter(2,4,7,37,89));


