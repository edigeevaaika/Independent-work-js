// functionName("Erjan", "Kydyrov") // My  name is Erjan Kydyrov
function myName() {
  console.log("My name is ", "Aida ", "Edigeeve ");
}
myName();

// functionName(height, radius) // Объем конуса равен ...
function coneVolume(h, r) {
  let volum = (1 / 3) * h * r;
  console.log(volum);
}
coneVolume(12, 6);

// functionName(" ... ") // Длина строки равна ...
function getStringLength(str) {
  return str.length;
}
let myString = "Привет, мир!";
let stringLength = getStringLength(myString);
console.log(stringLength); // выведет 13


// 4. Напишите функцию, которая принимает число и проверяет, четное оно или нечетное.
// functionName(num) // Число - четное || Число - нечетное

function number(a) {
  if (a % 2 === 0) {
    console.log("this number is even");
  } else if (a % 2 !== 0) {
    console.log("this number is not even");
  }
}
number(43);


// 5. Напишите функцию, которая возвращает квадрат числа.
// functionName(num) // Квадрат этого числа равен

function squareNumber(a) {
  return a ** 2;
}
console.log(squareNumber(9));


// 6. Напишите функцию, которая возвращает корень числа.
// functionName(num) // Корень этого числа равен
// Math.sqrt(25);
function sqrtNumber(a) {
  return Math.sqrt(a);
}
console.log(sqrtNumber(25));


// 7. Напишите функцию, которая возвращает периметр пятиугольника.
// functionName(a, b, c, d, e) // Периметр - ...

function perimeter(a, b, c, d, e) {
  return a + b + c + d + e;
}
console.log(perimeter(2, 4, 7, 37, 89));


// 8. Напишите цикл, который выводит каждое третье число в промежутке от 0 до 33.
// 0 3 6 9 ...
for (let i = 0; i < 34; i = i + 3) {
  console.log(i);
}

//9. Напишите цикл, вычисляющий факториал числа 8. (8!)
// ...
let factorialResult = 1;
for (let i = 1; i < 9; i++) {
  factorialResult = factorialResult * i;
}
console.log(factorialResult);

//10. Напишите цикл, который выводит квадраты чисел от 1 до 10.
// 1 4 9 ...

for (let i = 1; i < 11; i++) {
  console.log(i ** 2);
}

//11. Напишите цикл, который вычисляет сумму чисел от 1 до 25.
// ...
let sum = 1;
for (let i = 1; i < 26; i++) {
  sum = sum + i;
}
console.log(sum);

// 12.Напишите цикл, который печатает четные числа от 0 до 20.

for (let i = 0; i < 21; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//13. Напишите цикл, который печатает нечетные числа от 1 до 15.
// 1 3 ...

for (let i = 1; i < 16; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
//14. Создайте массив из строк и добавьте в начало массива 2 новых элемента, а в конец 3.
let example1 = ["Karakol", "Bishkek", "Naryn", "Osh"];
let result = 0;
example1.unshift("Tokmok", "Kara-balta");
console.log(example1);
example1.push("Kyzyl Kyiy", "Kant", "Cholpon Ata");
console.log(example1);

//15. Создайте массив чисел и вычислите сумму всех четных чисел в массиве.
let number3 = [2, 5, 8, 12, 5];
let sum2 = 0;
for (let i = 0; i < number3.length; i++) {
  if (number3[i] % 2 === 0) {
    sum2 = sum2 + number3[i];
  }
}
console.log(sum2);



// let arr = [2, 3, 4, 5];
// arr = arr.map(el => el **2);

// console.log(arr);


//17. Создайте массив строк и объедините их в одну строку. // ["I", "like", "to", "eat!"]
let example2 = ["I", "like", "to", "eat"];
console.log(example2.join());


//18. Создайте массив строк ["one", "two", "three"] и переверните его. // ["three", "two", "one"]
let example3 = ["one", "two", "three"];
example3.reverse();
console.log(example3);

//19. Создайте массив из имен (минимум 3) и выведите каждое имя.
// Hello Erjan Hello Ermek ...





//21. Создайте массив строк и проверьте есть ли такой элемент в массиве. // ["cat", "dog", "snake"]
// cat - true
// parrot - false
let example = ["parrot", "horse", "cat", "dog", "snake", "pig"];
for (let i = 0; i < example.length; i++) {
  if (example[i] === "cat" || example[i] === "dog" || example[i] == "snake") {
    console.log(example[i] + " - true");
  } else {
    console.log(example[i] + " - false");
  }
}
