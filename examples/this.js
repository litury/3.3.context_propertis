/**
 * ------------ ПРИМЕР -------------- *
 *             КОНТЕКСТ               *
 * ---------------------------------- *
 */

// объект this
// window - в браузере(если используем 'use strict' то ошибка)
console.log(this);
// пусть есть некоторый объект
const obj = {
    name: 'SomeName',
    someMethod() {
        // получим контекст
        console.log(this);
    }
}
// так мы находимся в контексте объекта
// { name: 'SomeName', someMethod: [Function: someMethod] }
obj.someMethod();

let func = obj.someMethod;
func(); // выведет глобальный объект
// в браузере это window
// все равно, что написать
let func2 = function () { console.log(this) };
func2();

// в this будет window
setTimeout(obj.someMethod, 1000);
