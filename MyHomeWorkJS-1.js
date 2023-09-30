// 1.

let hamburger = 100;
let fries = 100;
if  (hamburger >= 4 && fries >= 1){
    console.log('Ми поїли');
} else {
    console.log('Ми йдемо в інше кафе');
}

// 2.1.

productPrice = 2000;
(productPrice >= 1000 && productPrice <= 1900) ? console.log('Значення ціни товару знаходиться між 1000 та 1900 включно'):console.log('Значення ціни товару менше 1000 або більше 1900 включно');

// 2.2.

price = 2000;
if(price >= 1000 && price <= 1900){
    console.log('Значення ціни товару ='+ price + ' і знаходиться між 1000 та 1900 включно');
} else  {console.log('Значення ціни товару ='+ price + ' і це або менше 1000 ,або більше 1900 включно');}


// 3.1.

priceNot = 999;
if(priceNot < 1000 || priceNot > 1900){
    console.log('Значення ціни товару ='+ priceNot + ' і це не знаходиться між 1000 та 1900 включно');
} else if(priceNot > 1000 && priceNot < 1900) {
    console.log('Значення ціни товару ='+ priceNot + ' і це знаходиться між 1000 та 1900 ');
} else {console.log('Значення ціни товару ='+ priceNot + ' і це або 1000 ,або 1900 ');}

// 3.2.

productPriceNot = 1000;
if(!(productPriceNot < 1000 || productPriceNot > 1900) ){
    console.log('Значення ціни товару ='+ productPriceNot + ' і це знаходиться між 1000 та 1900 включно');
} else if(!(productPriceNot > 1000 && productPriceNot < 1900)) {
    console.log('Значення ціни товару ='+ productPriceNot + ' і це не знаходиться між 1000 та 1900 ');
} else {console.log('Значення ціни товару ='+ productPriceNot + ' і це або 1000 ,або 1900 ');}

//чи можна і як відкрити дужки перед ! (запереченням) - не знаю, міняю значення операторів на протилежні - не отримую ER

// 4.

let season

season = 4;
if(season ===1){
    console.log('Значення пори року ='+ season + ' і це Зима ');
} else if (season ===2){
    console.log('Значення пори року ='+ season + ' і це Весна ');
} else if (season ===3){
    console.log('Значення пори року ='+ season + ' і це Літо ');
} else if (season ===4){
    console.log('Значення пори року ='+ season + ' і це Осінь ');
} else {
    console.log('Значення пори року ='+ season + ' не існує ');
};


// 5.

let a, b, c;
a = 0;
b = -15;
c = 100;

if ( a < b && b < c){
    console.log('Значення ' + b + ' є середнім між значеннями ' + a + ' і ' + c );
} else if (c < b && b < a){
    console.log('Значення ' + b + ' є середнім між значеннями ' + c + ' і ' + a );
} else if (a < c && c < b){
    console.log('Значення ' + c + ' є середнім між значеннями ' + a + ' і ' + b );
} else if (b < c && c < a){
    console.log('Значення ' + c + ' є середнім між значеннями ' + b + ' і ' + a );
} else if (b < a && a < c){
    console.log('Значення ' + a + ' є середнім між значеннями ' + b + ' і ' + c );
} else if (c < a && a < b){
    console.log('Значення ' + a + ' є середнім між значеннями ' + c + ' і ' + b );
} else {console.log('Не знайдено');}


// 6.

