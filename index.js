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

