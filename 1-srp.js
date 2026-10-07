// S — Single Responsibility Principle
// Принцип единственной ответственности
// Каждый класс должен отвечать только за одну задачу.

// Этот класс отвечает только за данные клиента
class Client {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }
}

// Этот класс отвечает только за создание записи
class BookingService {
  createBooking(client, service) {
    console.log(
      `Создана запись: ${client.name} записан на услугу "${service}"`,
    );
  }
}

// Этот класс отвечает только за отправку уведомлений
class NotificationService {
  sendNotification(client) {
    console.log(
      `Уведомление отправлено клиенту ${client.name} на номер ${client.phone}`,
    );
  }
}

// Создаем клиента
const client = new Client("Михаил", "+79990000000");

// Создаем сервисы
const bookingService = new BookingService();
const notificationService = new NotificationService();

// Создаем запись
bookingService.createBooking(client, "Стрижка");

// Отправляем уведомление
notificationService.sendNotification(client);
