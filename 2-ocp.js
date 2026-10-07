// O — Open/Closed Principle
// Принцип открытости/закрытости
// Код должен быть открыт для расширения,
// но закрыт для изменения.

// Класс для отправки уведомлений по Email
class EmailNotification {
  send(message) {
    console.log(`Email: ${message}`);
  }
}

// Класс для отправки уведомлений по SMS
class SmsNotification {
  send(message) {
    console.log(`SMS: ${message}`);
  }
}

// Этот класс работает с любым объектом,
// у которого есть метод send()
class NotificationService {
  sendNotification(notification, message) {
    notification.send(message);
  }
}

// Создаем сервис
const notificationService = new NotificationService();

// Создаем разные способы уведомлений
const email = new EmailNotification();
const sms = new SmsNotification();

// Отправляем сообщения
notificationService.sendNotification(email, "Ваша запись успешно создана");

notificationService.sendNotification(sms, "Напоминаем о записи на завтра");
