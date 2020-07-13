"use strict";

/**
 *  Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'.
 *  Проверьте работу скрипта при a, равном 1, 0, -3.
 *  */
function zero(a) {
    return a === 0;
}

console.log(zero(1));
console.log(zero(0));
console.log(zero(-3));

/**
 *Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'.
 */

function positive(a) {
    return a > 0;
}

console.log(positive(-3));
console.log(positive(1));
console.log(positive(0));

/**
 * Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'.
 */

function nedative(a) {
    return a < 0;
}

console.log(nedative(-3));
console.log(nedative(1));
console.log(nedative(0));

/**
 * Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'.
 */

function positiveZero(a) {
    return a >= 0;
}

console.log(positiveZero(-3));
console.log(positiveZero(1));
console.log(positiveZero(0));

/**
 * Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'.
 * */

function negativeZero(a) {
    return a <= 0;
}

console.log(negativeZero(-3));
console.log(negativeZero(1));
console.log(negativeZero(0));

/**
 * Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'.
 * */

function notZero(a) {
    return a !== 0;
}

console.log(notZero(-3));
console.log(notZero(1));
console.log(notZero(0));

/**
 *  Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'.
 *  Проверьте работу скрипта при a, равном 'test', 'тест', 3.
 *  */

function onlyString(a) {
    return a === "test";
}

console.log(onlyString("test"));
console.log(onlyString(3));
console.log(onlyString("тест"));

/**
 * Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'.
 * Проверьте работу скрипта при a, равном '1', 1, 3.
 * */

function onlyStringNumber(a) {
    return a === "1";
}

console.log(onlyStringNumber("1"));
console.log(onlyStringNumber(3));
console.log(onlyStringNumber(1));

/**
 * Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'.
 * Проверьте работу скрипта при a, равном 5, 0, -3, 2.
 * */

function twoConditions(a) {
    return a > 0 && a < 5;
}

console.log(twoConditions(5));
console.log(twoConditions(0));
console.log(twoConditions(-3));
console.log(twoConditions(2));


/**
 * Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10.
 * Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
 * */

function oneOfTheConditions(a) {
    if (a === 0 || a === 2) {
        return a += 7;
    } else {
        return a /= 10;
    }
}

console.log(oneOfTheConditions(5));
console.log(oneOfTheConditions(0));
console.log(oneOfTheConditions(-3));
console.log(oneOfTheConditions(2));

/**
 * Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных,
 * иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b,
 * равном 1 и 3, 0 и 6, 3 и 5.
 * */

function twoVariablesAnd(a, b) {
    if (a <= 1 && b >= 3) {
        return a + b;
    } else {
        return a - b;
    }
}

console.log(twoVariablesAnd(1, 3));
console.log(twoVariablesAnd(0, 6));
console.log(twoVariablesAnd(3, 5));

/**
 * Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти,
 * то выведите 'Верно', в противном случае выведите 'Неверно'.
 * */

function twoVariablesOr(a, b) {
    return (a > 2 && a < 11) || (b >= 6 && b < 14);
}

console.log(twoVariablesOr(1, 3));
console.log(twoVariablesOr(0, 6));
console.log(twoVariablesOr(3, 5));

/**
 * Переменная num может принимать 4 значения: 1, 2, 3 или 4.
 * Если она имеет значение '1', то в переменную result запишем 'зима',
 * если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.
 * */

function year(num) {

    switch (num) {

        case 1: {
            console.log('зима');
        }
            break;
        case 2: {
            console.log('весна');

        }
            break;
        case 3: {
            console.log('лето');

        }
            break;
        case 4: {
            console.log('осень');

        }
            break;
        default: {
            alert('Unknown operation');
        }
    }
}

year(1);
year(2);
year(3);
year(4);
year(5);

/**
 * В переменной day лежит какое-то число из интервала от 1 до 31.
 * Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
 * */

function month(day) {

    switch (true) {

        case day > 0 && day <= 10: {
            console.log('первая декада');
        }
            break;
        case day > 10 && day <= 20: {
            console.log('вторая декада');
        }
            break;
        case day > 20 && day <= 31: {
            console.log('третья декада');
        }
            break;
        default: {
            console.log('Unknown operation');
        }
    }
}

month(1);
month(15);
month(30);
month(50);

/**
 * В переменной month лежит какое-то число из интервала от 1 до 12.
 * Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
 * */

function yearSeason(month) {

    switch (true) {

        case month < 3 || month === 12: {
            console.log('зима');
        }
            break;
        case month >= 3 && month < 6: {
            console.log('весна');
        }
            break;
        case month >= 6 && month < 9: {
            console.log('лето');
        }
            break;
        case month >= 9 && month < 12: {
            console.log('осень');
        }
            break;
        default: {
            console.log('Unknown operation');
        }
    }
}

yearSeason(1);
yearSeason(5);
yearSeason(10);
yearSeason(8);

/**
 * Дана строка, состоящая из символов, например, 'abcde'.
 * Проверьте, что первым символом этой строки является буква 'a'.
 * Если это так - выведите 'да', в противном случае выведите 'нет'.
 * */

function firstLetter(string) {

    switch (true) {

        case string[0] === 'a': {
            console.log('да');
        }
            break;
        default: {
            console.log('нет');
        }
    }
}

firstLetter('abcde');
firstLetter('bcdef');

/**
 *  Дана строка с цифрами, например, '12345'.
 *  Проверьте, что первым символом этой строки является цифра 1, 2 или 3.
 *  Если это так - выведите 'да', в противном случае выведите 'нет'.
 *  */

function firstNumber(string) {

    switch (true) {

        case (string[0] === '1') || (string[0] === '2') || (string[0] === '3') : {
            console.log('да');
        }
            break;
        default: {
            console.log('нет');
        }
    }
}

firstNumber('12345');
firstNumber('25846');
firstNumber('35846');
firstNumber('846');

/**
 * Дана строка из 3-х цифр.
 * Найдите сумму этих цифр.
 * То есть сложите как числа первый символ строки, второй и третий.
 * */

/**
 *
 * @param {string}string
 */
function sumNumber(string) {
    const arr = string.split('');
    const sum = Number(arr[0]) + Number(arr[1]) + Number(arr[2]);
    console.log(sum);
}

sumNumber('123');
sumNumber('258');
sumNumber('368');
sumNumber('846');

/**
 *  Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр.
 *  Если это так - выведите 'да', в противном случае выведите 'нет'.
 *  */

/**
 *
 * @param {string}string
 */
function sumString(string) {
    const arr1 = string.split('');
    const sum1 = Number(arr1[0]) + Number(arr1[1]) + Number(arr1[2]);
    const sum2 = Number(arr1[3]) + Number(arr1[4]) + Number(arr1[5]);

    switch (true) {

        case (sum1 === sum2) : {
            console.log('да');
        }
            break;
        default: {
            console.log('нет');
        }
    }
}

sumString('125843');
sumString('194284');











