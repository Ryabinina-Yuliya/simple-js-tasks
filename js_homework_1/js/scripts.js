/*Задание 2
Создайте переменные a1, a2, a3, a4, a5, a6, a7 (нужна для решения 4 задания), a8, a9,
a10, a11, a12, a13, a14, a15, a16, a17, a18. Поместите в них и выведите в консоль
результат выражений.
*/

let a1 = 5 / 3,
    a2 = 3 / 5,
    a3 = 5 + '3',
    a4 = '5'- 3,
    a5 = 75 + 'кг',
    a6 = 785 * 653,
    a7 =  100 / 25,
    a8 =  0 * 0,
    a9 = 0 / 2,
    a10 = 89 / 0,
    a11 = 98 + 2,
    a12 = 5 - 98,
    a13 = (8 + 56 * 4) / 5,
    a14 = (9 - 12) * 7 / (5 + 2),
    a15 = +"123",
    a16 = 1 || 0;
    a17 = false || true;
    a18 = true > 0;

console.log(a1, typeof a1);
console.log(a2, typeof a2);
console.log(a3, typeof a3);
console.log(a4, typeof a4);
console.log(a5, typeof a5);
console.log(a6, typeof a6);
console.log(a7, typeof a7);
console.log(a8, typeof a8);
console.log(a9, typeof a9);
console.log(a10, typeof a10);
console.log(a11, typeof a11);
console.log(a12, typeof a12);
console.log(a13, typeof a13);
console.log(a14, typeof a14);
console.log(a15, typeof a15);
console.log(a16, typeof a16);
console.log(a17, typeof a17);
console.log(a18, typeof a18);

/*Задание 3
Напишите скрипт, который находит площадь прямоугольника высотой 23см и
шириной 10см, значение высоты и ширины должны хранится в width и height,
соответственно, а значение площади должно хранится в числовой переменной SPryam.
*/ 

let width = 23,
    height = 10,
    SPryam = width * height;

console.log(SPryam + ' см');

/*Задание 4 
Напиши скрипт, который находит объем цилиндра высотой 10м и диаметром
основания равным значению переменной a7 из задания 2, результат поместите в
переменную VCilindra.
*/

let hCilindr = 10,
    dCilindr = a7;
const Pi = 3.14;
let VCilindr = Pi * dCilindr * dCilindr / 4 * hCilindr;
console.log(VCilindr + ' м');

/*Задание 5
Найдите площадь круга (SKruga) с радиусом 5см (r).
*/

let r = 5;
let SKrug = Pi * r * r;
console.log(SKrug + ' см');

/*Задание 6 
Найдите площадь трапеции (STrap) с основаниями 5см (a) и 7см (b), и высотой 10см
(h).
*/

let aTrap = 5,
    bTrap = 7,
    hTrap = 10,
    STrap = (aTrap + bTrap) / 2 * hTrap;

console.log(STrap + ' см');

/*Задание 7 
Даны: размер ипотечного кредита (S - 2 млн. руб), процентная годовая ставка (p - 10%),
кол-во лет (years - 5). Найти переплату по кредиту, значение переплаты должно
содержаться в переменной Pereplata.
*/

let S = 2000000,
    p = 10 / 100,
    years = 5,
    Pereplata = S * p * years;

console.log(Pereplata +' руб');

/*Задание 8
Решите уравнения (найдите неизвестный x), где a = 8, b = 3:
a+2(x-b)=16;
b(x+15)=a+6x;
x+2x+ax+bx=23780.
*/

let A = 8,
    B = 3,
    X1 = ((16 - A) / 2) + B,
    X2 = (A - (15 * B)) / (B - 6),
    X3 = 23780 / (1 + 2 + A + B);

console.log(X1);
console.log(X2);
console.log(X3);