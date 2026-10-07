// I — Interface Segregation Principle
// Принцип разделения интерфейсов
// Класс не должен зависеть от методов,
// которые ему вообще не нужны.

// Оплата банковской картой
class CardPayment {
  pay() {
    console.log("Оплата банковской картой");
  }
}

// Оплата по номеру телефона
class PhonePayment {
  pay() {
    console.log("Оплата по номеру телефона");
  }
}

// Оплата через WebMoney
class WebMoneyPayment {
  pay() {
    console.log("Оплата через WebMoney");
  }
}

// Терминалу нужна только оплата картой
class TerminalPaymentService {
  constructor(cardPayment) {
    this.cardPayment = cardPayment;
  }

  makePayment() {
    this.cardPayment.pay();
  }
}

// Интернет-сервис поддерживает несколько способов оплаты
class InternetPaymentService {
  constructor(cardPayment, phonePayment, webMoneyPayment) {
    this.cardPayment = cardPayment;
    this.phonePayment = phonePayment;
    this.webMoneyPayment = webMoneyPayment;
  }

  payByCard() {
    this.cardPayment.pay();
  }

  payByPhone() {
    this.phonePayment.pay();
  }

  payByWebMoney() {
    this.webMoneyPayment.pay();
  }
}

// Создаем способы оплаты
const cardPayment = new CardPayment();
const phonePayment = new PhonePayment();
const webMoneyPayment = new WebMoneyPayment();

// Терминал получает только то, что ему действительно нужно
const terminal = new TerminalPaymentService(cardPayment);

terminal.makePayment();

// Интернет-сервис получает все нужные ему способы оплаты
const internetPayment = new InternetPaymentService(
  cardPayment,
  phonePayment,
  webMoneyPayment,
);

internetPayment.payByCard();
internetPayment.payByPhone();
internetPayment.payByWebMoney();
