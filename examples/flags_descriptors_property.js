/**
 * ------------- ПРИМЕР -------------- *
 *    ФЛАГИ И ДЕСКРИПТОРЫ СВОЙСТВ      *
 * ----------------------------------- *
 */

// Флаги и дескрипторы свойств. Пример.
let document = {
    name: 'Document',
    type: 'docx',
    created: '10.02.2022'
};

// получение дескрипторов методом объекта
// Object.getOwnPropertyDescriptor(obj, propertyName)
// объект document - свойство name
let descriptor = Object.getOwnPropertyDescriptor(document, 'name');

console.log(descriptor);    // {
//   value: 'Document',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }


// изменение флага с помощью Object.defineProperty(obj, propertyName, descriptor)
Object.defineProperty(document, 'type', {
    value: 'PDF',
    writable: false
});

let descriptor2 = Object.getOwnPropertyDescriptor(document, 'type');
// { value: 'PDF', writable: false, enumerable: true, configurable: true }
console.log(descriptor2);
// попытаемся изменить свойство у которого writable = false
document.type = 'XML'
// { name: 'Document', type: 'PDF', created: '10.02.2022' }
console.log(document);



let person = {
    name: 'User',
    age: 22,
    created: '10.01.2022',
    updated: '22.01.2022'
}

for (let key in person) {
    console.log(key) //name
    //age
    //created
    //updated
}

// свойство created становится неперечисляемым
Object.defineProperty(person, 'created', {
    enumerable: false
});
Object.defineProperty(person, 'updated', {
    enumerable: false
});

//либо сразу несколько свойств
Object.defineProperties(person, {
    created: { enumerable: false },
    updated: { enumerable: false }

});

// попробуем обойти свойства в цикле
for (let key in person) {
    console.log(key) //name
    //age
}
// заметим что created и updated
// теперь не перечисляемые

Object.defineProperty(person, 'name', {
    value: 'created',
    writable: false,
    configurable: false // Неконфигурируемое свойство. Нет возможности изменить или удалить.
});