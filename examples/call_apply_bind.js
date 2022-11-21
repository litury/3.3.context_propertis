/**
 * ------------- ПРИМЕР -------------- *
 *      ВСТРОЕННЫЕ МЕТОДЫ ФУНКЦИЙ      *
 * ----------------------------------- *
 */

/**
 * ------------- ПРИМЕР -------------- *
 *                CALL                 *
 * ----------------------------------- *
 */
addLoginList = ['Jack','Daniel'];

const userList = {
    loginList: ['Jimm', 'Bimm'],
    appendLogins (...logins) {
        logins.forEach(login => this.loginList.push(login));
    }
}
let f = userList.appendLogins;
//f.call(...addLoginList); - ошибка
// если привяжем контекст - все ок
f.call(userList, ...addLoginList);
// [ 'Jimm', 'Bimm', 'Jack', 'Daniel' ]
console.log(userList.loginList);

/**
 * ------------- ПРИМЕР -------------- *
 *               APPLY                 *
 * ----------------------------------- *
 */
f.apply(userList, ['Martin', ...addLoginList, 'John']);
// [ 'Jimm', 'Bimm', 'Martin', 'Jack', 'Daniel', 'John' ]
console.log(userList.loginList);

/**
 * ------------- ПРИМЕР -------------- *
 *                BIND                 *
 * ----------------------------------- *
 */
let f2 = userList.appendLogins.bind(userList);
f2(...addLoginList);
// [ 'Jimm', 'Bimm', 'Jack', 'Daniel' ]
console.log(userList.loginList);


const userBind = {
    name: 'User',
    age: 28,
    showUserInfo (gender) {
        console.log('name: ' + this.name);
        console.log('age: ' + this.age);
        console.log('gender: ' + gender);
    }
}
// передаем контекст user с помощью bind
const userInfo = userBind.showUserInfo.bind(userBind,'male')
userInfo()
// передаем контекст user с помощью call и сразу вызываем
userBind.showUserInfo.call(userBind, 'female')
// передаем контекст user с помощью apply и сразу вызываем
userBind.showUserInfo.apply(userBind, ['female'])