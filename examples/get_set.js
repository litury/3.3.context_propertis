/**
 * ------------- ПРИМЕР -------------- *
 *          ГЕТТЕРЫ И СЕТТЕРЫ          *
 * ----------------------------------- *
 */

let burgers = {
    price: 10,
    qty: 1,
    get totalSaled() {
        return this.price * this.qty
    },
    set totalSaled(val) {
        this.qty = val / this.price
    }
}
// получаем сумму денег за проданные бургеры
console.log(burgers.totalSaled) // 10
// выручка за день 390
burgers.totalSaled = 390
// в сеттере поле в qty записалось количество
// проданных бургеров исходя из суммы
console.log(burgers.qty) // 39
// чтобы получить проданное количество воспользуемся геттером
console.log(burgers.totalSaled) // 390