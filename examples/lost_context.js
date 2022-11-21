/**
 * ------------ ПРИМЕР -------------- *
 *        ГДЕ ТЕРЯЕТСЯ КОНТЕКСТ       *
 * ---------------------------------- *
 */
// различие стрелочной и обычной функции
const speed = 80 // скорость авто в км/ч
const distance = 900 // расстояние в км
// обыкновенная функция
function calcTravelTime(speed, distance) {
    return distance / speed
}
// переменной присваиваем стрелочную функцию
const travelTime = (speed, distance) => distance / speed

console.log(calcTravelTime(speed, distance)); // 11.25
console.log(travelTime(speed, distance)); // 11.25

// объект с двумя свойствами
// и на первый взгляд одинаковыми методами
const users = {
    loginList: ['Vasya', 'Kolya', 'Anna'],
    userRole: 'user',

    printUsers() {
        this.loginList.forEach(
            user => console.log(`${this.userRole} ${user} - ${this}`)
        )
    },
    failPrintUsers() {
        this.loginList.forEach(
            // все тоже самое, но объявляем функцию через function
            function (user) {
                console.log(`${this.userRole} ${user} - ${this}`);
            }
        )
    }
}
// user Vasya - [object Object]
// user Kolya - [object Object]
// user Anna - [object Object]
users.printUsers();
// undefined Vasya - [object global]
// undefined Kolya - [object global]
// undefined Anna - [object global]
users.failPrintUsers();

// где теряется контекст
const user = {
    name: 'User',
    age: 28,
    showUserInfo() {
        console.log('name: ' + this.name);
        console.log('age: ' + this.age);
    }
}
// name: User
// age: 28
user.showUserInfo()
// потеряли контекст тк передали только функцию showUser
// name: undefined
// age: undefined
setTimeout(user.showUserInfo, 1000)
// callback таймаута замыкается на объект user и this не теряется
// name: User
// age: 28
setTimeout(() => user.showUserInfo(), 1000)