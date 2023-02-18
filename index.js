function myName() {
  console.log( "My name is " , "Aida " , "Edigeeve ");
}
myName();

function coneVolume(h,r){
  let volum = 1 / 3 * h * r ;
  console.log(volum);
}
coneVolume(12,6);


function getStringLength(str) {
  return str.length;
}
let myString = 'Привет, мир!';
let stringLength = getStringLength(myString);
console.log(stringLength); // выведет 13
