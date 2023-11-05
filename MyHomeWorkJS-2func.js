/* 1. Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)*/



function hamburgerAndFries(g, f) {
    if (g >= 4 && f >= 1) {
        console.log('Ми поїли');
    } else {
        console.log('Ми йдемо в інше кафе');
    }
}


hamburgerAndFries(3, 1);

/* 2.1. Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.*/




function between(figure) {
    if (figure >= 1000 && figure <= 1900) {
        console.log('Значення ціни товару =' + figure + ' і знаходиться між 1000 та 1900 включно');
    } else {
        console.log('Значення ціни товару =' + figure + ' і це або менше 1000 ,або більше 1900 включно');
    }
}

between(1901);


/* 3.1. Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.*/



function SeasonYear(oneOfFour) {
    if (oneOfFour === 1) {
        console.log('Значення пори року =' + oneOfFour + ' і це Зима ');
    } else if (oneOfFour === 2) {
        console.log('Значення пори року =' + oneOfFour + ' і це Весна ');
    } else if (oneOfFour === 3) {
        console.log('Значення пори року =' + oneOfFour + ' і це Літо ');
    } else if (oneOfFour === 4) {
        console.log('Значення пори року =' + oneOfFour + ' і це Осінь ');
    } else {
        console.log('Значення пори року =' + oneOfFour + ' не існує ');
    }
}

SeasonYear(4);



/* 5. Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.*/





const avgFunction = (af, bf, cf) => {
    let avgf
    if (af > bf && af > cf) {
        if (bf > cf) {
            console.log(avgf = bf + ' Середнє чило');
        } else (console.log(avgf = cf + ' Середнє чисо'))
    } else if (af < bf && af < cf) {
        if (bf > cf) {
            console.log(avgf = cf + ' Середнє исло');
        } else (console.log(avgf = bf + ' Середнє чтсло'))
    } else (console.log(avgf = af + ' Середнє число'))
}
avgFunction(-1, 0, 2);
avgFunction(1, 0, 2);
avgFunction(-1, 10, 2);


/* 6. Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.*/



const dayOfWeek = (numberOfDay) => {
    switch (numberOfDay) {
        case 1:
            console.log(numberOfDay + ' це Понеділок');
            break;
        case 2:
            console.log(numberOfDay + ' це Вівторок');
            break;
        case 3:
            console.log(numberOfDay + ' це Середа');
            break;
        case 4:
            console.log(numberOfDay + ' це Четвер');
            break;
        case 5:
            console.log(numberOfDay + ' це П\'ятниця');
            break;
        case 6:
            console.log(numberOfDay + ' це Субота');
            break;
        case 7:
            console.log(numberOfDay + ' це Неділя');
            break;
        default:
            console.log(numberOfDay + ' Відсутній день');
            break;
    }
}
dayOfWeek(1);
dayOfWeek(2);
dayOfWeek(3);
dayOfWeek(4);
dayOfWeek(5);
dayOfWeek(6);
dayOfWeek(7);
dayOfWeek(8);
dayOfWeek("qweqwe");


/* 7. За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.*/



function sum(xf, yf) {
    let cf = xf + yf;
    return cf;
}

function subtraction(xf, yf) {
    let cf = xf - yf;
    return cf;
}

function multiplication(xf, yf) {
    let cf = xf * yf;
    return cf;
}

function dividing(xf, yf) {
    if (yf != 0) {
        let cf = xf / yf;
        return cf;

    } else (console.log('На ' + yf + ' ділити не можна'))

}

console.log(sum(1, 4));
console.log(subtraction(0, 2));
console.log(multiplication(3, 6));
console.log(dividing(10, 7));
console.log(dividing(10, 2));
console.log(dividing(10, 0));

/* 8. Використовуючи цикл for перемістити значення від 1 до 5 у масив myArray.*/



//variant N 1
let str = '12345';
let myArrayFunc = str.split('');
console.log(myArrayFunc);
console.log(myArrayFunc.join());


//variant N 2
const myArrayFunc1 = () => {
    for (i = 1; i <= 5; i++) {
        console.log(i);
    }

}
myArrayFunc1();

/* 9. Напишіть 2 цикли.
За допомогою першого передайте парні числа від 1 до 9 у myArray за допомогою циклу for.
За допомогою другого передайте непарні числа від 1 до 9 у myArray за допомогою циклу for.*/



const numbersAll = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbersEven = numbersAll.filter(num => num % 2 === 0);
console.log(numbersEven);
const numbersOdd = numbersAll.filter(num => num % 2 !== 0);
console.log(numbersOdd);





/* 10. Оголоcіть та ініціалізуйте змінну total = 0.
    Використовуйте цикл for, щоб додати значення кожного елемента масиву myArr до підсумку.
    const myArr = [2, 3, 4, 5, 6];*/



//variant N 1
const myArr101 = [2, 3, 4, 5, 6];
function arraySum(array) {
    let total = 0;
    for (let i = 0; i < myArr101.length; i++) {
        total += myArr101[i];
    }
    console.log(total);
}
arraySum(myArr101);



//variant N 2
const myArr102 = [2, 3, 4, 5, 6];
total2 = myArr102.reduce((sum, current) => sum + current, 0);
console.log(total2);

//variant N 3
const myArr103 = [2, 3, 4, 5, 6];
let sum103 = myArr103.reduce(function (total, amount) {
    return total + amount
})
console.log(sum103);

/* 11. Напишіть код, котрий виведе в консоль кожен піделемент в arr по одному.

    const arr = [ [1, 2], [3, 4], [5, 6] ];

    Console output:
    1
    2
    3
    4
    5
    6 */



const arrF = [[1, 2], [3, 4], [5, 6]];
let arrFnew = [];
for (let i = 0; i < arrF.length; i++) {
    for (let j = 0; j < arrF[i].length; j++) {
        arrFnew.push(arrF[i][j]);
    }

}
console.log(arrFnew);


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



const arr12Func = [[1, 2], [3, 4], [5, 6, 7]];
const MultiplyArr = [];
let productFunc = 1;
for (let i = 0; i < arr12Func.length; i++) {
    for (let j = 0; j < arr12Func[i].length; j++) {
        productFunc *= arr12Func[i][j];
        //MultiplyArr.push(productFunc); 
    }

}
MultiplyArr.push(productFunc);
console.log(MultiplyArr);


/* 13.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.*/

//variant N 1
let someString = "EnglishLevelOnlineImproveChooseA1."
console.log(someString.replaceAll(/[aeiouAEIOU]/g, ''));

//variant N 2
let disemvowel = (str) => str.replace(/[aeiouAEIOU]/g, '')
console.log(disemvowel('EnglishLevelOnlineImproveChooseA1.'));


/* 14.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)*/

