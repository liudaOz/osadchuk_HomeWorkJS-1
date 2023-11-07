/* 1. Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)*/

let hamburger = 100;
let fries = 100;
if (hamburger >= 4 && fries >= 1) {
    console.log('Ми поїли');
} else {
    console.log('Ми йдемо в інше кафе');
}

/* 2.1. Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.*/

productPrice = 2000;
(productPrice >= 1000 && productPrice <= 1900) ? console.log('Значення ціни товару знаходиться між 1000 та 1900 включно') : console.log('Значення ціни товару менше 1000 або більше 1900 включно');

/* 2.2. Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.*/

price = 2000;
if (price >= 1000 && price <= 1900) {
    console.log('Значення ціни товару =' + price + ' і знаходиться між 1000 та 1900 включно');
} else { console.log('Значення ціни товару =' + price + ' і це або менше 1000 ,або більше 1900 включно'); }


/* 3.1. Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.*/

priceNot = 999;
if (priceNot < 1000 || priceNot > 1900) {
    console.log('Значення ціни товару =' + priceNot + ' і це не знаходиться між 1000 та 1900 включно');
} else if (priceNot > 1000 && priceNot < 1900) {
    console.log('Значення ціни товару =' + priceNot + ' і це знаходиться між 1000 та 1900 ');
} else { console.log('Значення ціни товару =' + priceNot + ' і це або 1000 ,або 1900 '); }

/* 3.2. Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.*/

productPriceNot = 1000;
if (!(productPriceNot < 1000 || productPriceNot > 1900)) {
    console.log('Значення ціни товару =' + productPriceNot + ' і це знаходиться між 1000 та 1900 включно');
} else if (!(productPriceNot > 1000 && productPriceNot < 1900)) {
    console.log('Значення ціни товару =' + productPriceNot + ' і це не знаходиться між 1000 та 1900 ');
} else { console.log('Значення ціни товару =' + productPriceNot + ' і це або 1000 ,або 1900 '); }

//чи можна і як відкрити дужки перед ! (запереченням) - не знаю, міняю значення операторів на протилежні - не отримую ER

/* 4. За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.*/

let season

season = 4;
if (season === 1) {
    console.log('Значення пори року =' + season + ' і це Зима ');
} else if (season === 2) {
    console.log('Значення пори року =' + season + ' і це Весна ');
} else if (season === 3) {
    console.log('Значення пори року =' + season + ' і це Літо ');
} else if (season === 4) {
    console.log('Значення пори року =' + season + ' і це Осінь ');
} else {
    console.log('Значення пори року =' + season + ' не існує ');
};


/* 5. Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.*/

let a, b, c;
a = 0;
b = -15;
c = 100;

if (a < b && b < c) {
    console.log('Значення ' + b + ' є середнім між значеннями ' + a + ' і ' + c);
} else if (c < b && b < a) {
    console.log('Значення ' + b + ' є середнім між значеннями ' + c + ' і ' + a);
} else if (a < c && c < b) {
    console.log('Значення ' + c + ' є середнім між значеннями ' + a + ' і ' + b);
} else if (b < c && c < a) {
    console.log('Значення ' + c + ' є середнім між значеннями ' + b + ' і ' + a);
} else if (b < a && a < c) {
    console.log('Значення ' + a + ' є середнім між значеннями ' + b + ' і ' + c);
} else if (c < a && a < b) {
    console.log('Значення ' + a + ' є середнім між значеннями ' + c + ' і ' + b);
} else { console.log('Не знайдено'); }

let ar, br, cr;
ar = -1;
br = 10;
cr = 0;

let avgr
if (ar > br && ar > cr) {
    if (br > cr) {
        console.log(avgr = br + ' Середнє чило');
    } else (console.log(avgr = cr + ' Середнє чисо'))
} else if (ar < br && ar < cr) {
    if (br > cr) {
        console.log(avgr = cr + ' Середнє исло');
    } else (console.log(avgr = br + ' Середнє чтсло'))
} else (console.log(avgr = ar + ' Середнє число'))



/* 6. Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.*/

let day
day = 10;
switch (day) {
    case 1:
        console.log('day ' + day + ' це Понеділок');
        break;
    case 2:
        console.log('day ' + day + ' це Вівторок');
        break;
    case 3:
        console.log('day ' + day + ' це Середа');
        break;
    case 4:
        console.log('day ' + day + ' це Четвер');
        break;
    case 5:
        console.log('day ' + day + ' це П\'ятниця');
        break;
    case 6:
        console.log('day ' + day + ' це Субота');
        break;
    case 7:
        console.log('day ' + day + ' це Неділя');
        break;
    default:
        console.log('Default output');
        break;
}


/* 7. За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.*/

let operator, x, y, z;
x = 6;
y = 2;
operator = '/'
switch (operator) {
    case '+':
        console.log(z = x + y + ' Це ' + x + ' плюс ' + y);
        break;
    case '-':
        console.log(z = x - y + ' Це ' + x + ' мінус ' + y);
        break;
    case '*':
        console.log(z = x * y + ' Це ' + x + ' помножити на ' + y);
        break;
    case '/':
        console.log(z = x / y + ' Це ' + x + ' поділити на ' + y);
        break;
    default:
        console.log('Default output');
        break;
}

/* 8. Використовуючи цикл for перемістити значення від 1 до 5 у масив myArray.*/

let myArray = [1, 2, 3, 4, 5];
for (let i = 0; i < 5; i++) {
    console.log(myArray[i]);
}


let myArrayN = [];
for (let i = 1; i < 6; i++) {
    myArrayN.push(i);
}
console.log(myArrayN);

/* 9. Напишіть 2 цикли.
За допомогою першого передайте парні числа від 1 до 9 у myArray за допомогою циклу for.
За допомогою другого передайте непарні числа від 1 до 9 у myArray за допомогою циклу for.*/

let myArray91 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < myArray91.length; i++) {
    if (i % 2 != 0) {
        console.log(myArray91[i]);
    }
}

let myArray92 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < myArray92.length; i++) {
    if (i % 2 == 0) {
        console.log(myArray92[i]);
    }
}


let myArrayN9 = [];
for (let i = 1; i < 10; i +=2){
    myArrayN9.push(i);
}for (let i = 2; i < 10; i +=2){
    myArrayN9.push(i);
}
console.log(myArrayN9);

/* 10. Оголоcіть та ініціалізуйте змінну total = 0.
    Використовуйте цикл for, щоб додати значення кожного елемента масиву myArr до підсумку.
    const myArr = [2, 3, 4, 5, 6];*/

// 10.1
const myArr101 = [2, 3, 4, 5, 6];
function arraySum(array) {
    let total = 0;
    for (let i = 0; i < myArr101.length; i++) {
        total += myArr101[i];
    }
    console.log(total);
}
arraySum(myArr101);


const myArr101re = [2, 3, 4, 5, 6];
let totalre = 0;
for (let i = 0; i < myArr101re.length; i++) {
    totalre += myArr101re[i];
}

console.log(totalre);

// 10.2
const myArr102 = [2, 3, 4, 5, 6];
total2 = myArr102.reduce((sum, current) => sum + current, 0);
console.log(total2);

/* 11. Напишіть код, котрий виведе в консоль кожен піделемент в arr по одному.

    const arr = [ [1, 2], [3, 4], [5, 6] ];

    Console output:
    1
    2
    3
    4
    5
    6 */

const arr = [[1, 2], [3, 4], [5, 6]];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}

/* 12. Доповніть код нижче, так щоб в консоль повертався результат множення усіх чисел у підмасивах arr.
    Використайте для цього вкладені цикли for.

    Наприклад:
    const arr = [[1], [2], [3]]  >  console.log(product) має повернути 6
    const arr = [[1, 2], [3, 4], [5, 6, 7]]  >  console.log(product) має повернути 5040
    const arr = [[5, 1], [0.2, 4, 0.5], [3, 9]]  >  console.log(product) має повернути 54

    const arr = [[1, 2], [3, 4], [5, 6, 7]];

    let product = 1;

    // тут має бути ваше рішення

    console.log(product);*/

const arr12 = [[1, 2], [3, 4], [5, 6, 7]];
//function MultiplyMatrix(arr12){
let product = 1;
for (let i = 0; i < arr12.length; i++) {
    for (let j = 0; j < arr12[i].length; j++) {
        product *= arr12[i][j];
        if (i == arr12.length - 1 && j == arr12[i].length - 1) {
            console.log(product);
        }
    }
}

const arr12re = [[1, 2], [3, 4], [5, 6, 7]];
//function MultiplyMatrix(arr12){
let productre = 1;
for (let i = 0; i < arr12re.length; i++) {
    for (let j = 0; j < arr12re[i].length; j++) {
        productre *= arr12re[i][j];
    }
}
console.log(productre);


/* 13.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.*/

let someString = "EnglishLevelOnlineImproveChooseA1."
console.log(someString.replaceAll(/[aeiouAEIOU]/g, ''));


/* 14.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)*/

/*let unitOfLength2 = 111;
let v2, r2;
r2 = unitOfLength2 / 1000;
v2 = String(r2);


if ((v2.endsWith("0") && v2.slice(-1)) || v2.endsWith("5") || v2.endsWith("6")
|| v2.endsWith("7") || v2.endsWith("8") || v2.endsWith("9") 
|| ((v2.endsWith("1") && v2.slice(-2))) ){
    console.log(unitOfLength2 + ' метрів це ' + r2 + ' кілометра');
} else if ((v2.endsWith("1") && v2.slice(-1))){
    console.log(unitOfLength2 + ' метр це ' + r2 + ' кілометра');
} else if (v2.endsWith("2") || v2.endsWith("3")|| v2.endsWith("4")){
    console.log(unitOfLength2 + ' метри це ' + r2 + ' кілометра');
} else {console.log('Значення не існує ');}*/

// не написала код для 1, 101, 1001

// for me
let unitOfLength = 'm';
let number = 111;
let r;
let v = 1000;
switch (unitOfLength) {
    case 'm':
        console.log(r = number / v + ' кілометрів - це ' + number + ' ' + unitOfLength);
        break;
    case 'km':
        console.log(r = number * v + ' метрів - це ' + number + ' ' + unitOfLength);
        break;
    default:
        console.log('Default output');
        break;
}


/*let unitOfLength2 = 101;
let v2, r2;
r2 = unitOfLength2 / 1000;
v2 = String(r2);


if ((v2.endsWith("0") && v2.slice(-1)) || v2.endsWith("5") || v2.endsWith("6")
|| v2.endsWith("7") || v2.endsWith("8") || v2.endsWith("9") 
|| ((v2.endsWith("1") && v2.slice(-2))) ){
    console.log(unitOfLength2 + ' метрів це ' + r2 + ' кілометра');
} else if ((v2.endsWith("1") && v2.indexOf("0")==1)){
    console.log(unitOfLength2 + ' метр це ' + r2 + ' кілометра');
} else if (v2.endsWith("2") || v2.endsWith("3")|| v2.endsWith("4")){
    console.log(unitOfLength2 + ' метри це ' + r2 + ' кілометра');
} else {console.log('Значення не існує ');}*/