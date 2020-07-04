"use strict";

/* Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'.
Проверьте работу скрипта при a, равном 1, 0, -3.*/
function zero(a) {
    if (a === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(zero(1));
console.log(zero(0));
console.log(zero(-3));

/*Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'.
*/

function positive(a) {
    if (a > 0) {
        return true;
    } else {
        return false;
    }
}
console.log(positive(-3));
console.log(positive(1));
console.log(positive(0));

/*Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'.
*/

function nedative(a) {
    if (a < 0) {
        return true;
    } else {
        return false;
    }
}
console.log(nedative(-3));
console.log(nedative(1));
console.log(nedative(0));

/*Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'.
*/

function positiveZero(a) {
    if (a >= 0) {
        return true;
    } else {
        return false;
    }
}
console.log(positiveZero(-3));
console.log(positiveZero(1));
console.log(positiveZero(0));

/*Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'.*/

function negativeZero(a) {
    if (a <= 0) {
        return true;
    } else {
        return false;
    }
}
console.log(negativeZero(-3));
console.log(negativeZero(1));
console.log(negativeZero(0));

/*Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'.*/

function notZero(a) {
    if (a === 0) {
        return false;
    } else {
        return true;
    }
}
console.log(notZero(-3));
console.log(notZero(1));
console.log(notZero(0));

/* Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'.
Проверьте работу скрипта при a, равном 'test', 'тест', 3.*/

function onlyString(a) {
    if (a === "test") {
        return true;
    } else {
        return false;
    }
}
console.log(onlyString("test"));
console.log(onlyString(3));
console.log(onlyString("тест"));

/*Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'.
Проверьте работу скрипта при a, равном '1', 1, 3.*/

function onlyStringNumber(a) {
    if (a === "1") {
        return true;
    } else {
        return false;
    }
}
console.log(onlyStringNumber("1"));
console.log(onlyStringNumber(3));
console.log(onlyStringNumber(1));

/*Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'.
Проверьте работу скрипта при a, равном 5, 0, -3, 2.
*/

function twoConditions(a) {
    if (a > 0 && a < 5) {
        return true;
    } else {
        return false;
    }
}
console.log(twoConditions(5));
console.log(twoConditions(0));
console.log(twoConditions(-3));
console.log(twoConditions(2));


/*
Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10.
Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
*/

function oneOfTheConditions(a) {
    if (a === 0 || a === 2) {
        return (a += 7);
    } else {
        return (a /= 10);
    }
}
console.log(oneOfTheConditions(5));
console.log(oneOfTheConditions(0));
console.log(oneOfTheConditions(-3));
console.log(oneOfTheConditions(2));

/*
Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных,
иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b,
равном 1 и 3, 0 и 6, 3 и 5.
*/

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

/*
Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти,
то выведите 'Верно', в противном случае выведите 'Неверно'.
*/

function twoVariablesOr(a, b) {
    if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
        return true;
    } else {
        return false;
    }
}
console.log(twoVariablesOr(1, 3));
console.log(twoVariablesOr(0, 6));
console.log(twoVariablesOr(3, 5));


