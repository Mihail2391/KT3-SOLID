// D — Dependency Inversion Principle
// Принцип инверсии зависимостей
// Класс верхнего уровня не должен жестко зависеть
// от конкретной реализации другого класса.

// Оплата наличными
class CashPayment {
  pay(amount) {
    console.log(`Оплата наличными: ${amount} руб.`);
  }
}

// Оплата банковской картой
class CardPayment {
  pay(amount) {
    console.log(`Оплата картой: ${amount} руб.`);
  }
}

// Магазин не знает, какой именно способ оплаты используется.
// Он просто ожидает объект, у которого есть метод pay().
class Shop {
  constructor(payment) {
    this.payment = payment;
  }

  checkout(amount) {
    this.payment.pay(amount);
  }
}

// Создаем разные способы оплаты
const cashPayment = new CashPayment();
const cardPayment = new CardPayment();

// Один магазин работает с наличными
const cashShop = new Shop(cashPayment);

cashShop.checkout(1500);

// Другой магазин работает с картой
const cardShop = new Shop(cardPayment);

cardShop.checkout(2500);
