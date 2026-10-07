// L — Liskov Substitution Principle
// Принцип подстановки Барбары Лисков
// Объект дочернего класса должен уметь заменить
// объект родительского класса без поломки программы.

// Базовый класс пользователя
class User {
  showInfo() {
    console.log("Обычный пользователь");
  }
}

// Клиент наследуется от User
class Client extends User {
  showInfo() {
    console.log("Клиент сервиса бронирования");
  }
}

// Администратор тоже наследуется от User
class Admin extends User {
  showInfo() {
    console.log("Администратор сервиса бронирования");
  }
}

// Функция ожидает объект типа User
function printUserInfo(user) {
  user.showInfo();
}

// Но вместо User мы можем передать его наследников
const client = new Client();
const admin = new Admin();

printUserInfo(client);
printUserInfo(admin);
