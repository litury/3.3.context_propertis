/**
 * ------------- ПРИМЕР -------------- *
 *          ОБЪЕКТЫ MAP И SET          *
 * ----------------------------------- *
 */
// ключем и значением может быть что угодно
let map = new Map ([
    ['Vasya','32'],
    ['Petya',2],
    [23,'Kolya'],
    [{name:'Vasya', age:33}, 32]
]);
//
console.log(map);   // {
                    // 'Vasya' => '32',
                    // 'Petya' => 2,
                    // 23 => 'Kolya',
                    // { name: 'Vasya', age: 33 } => 32
                    // }

console.log(map.size); // 4
map.clear();
console.log(map); // {}
// новые ключ-значения
map.set('key','value')
    .set('key1','value1')
    .set('key2','value2');
// { 'key' => 'value', 'key1' => 'value1', 'key2' => 'value2' }
console.log(map);
console.log(map.has('key1')); // true
console.log(map.get('key2')); // value2

for (let kv of map.entries()){
    console.log(kv[0] + " -> " + kv[1]);
    // key -> value
    // key1 -> value1
    // key2 -> value2
}

// передаем итерируемый объект
let set = new Set(['Vasya',2,34,'Jimm',32])
console.log(set.size); // 5
console.log(set.has('Vasya')) // true

set.add('John')
    .add(34)
    .add(3)
    .add(3)
    .add(23);
// { 'Vasya', 2, 34, 'Jimm', 32, 'John', 3, 23 }
console.log(set);