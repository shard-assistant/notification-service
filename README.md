# Уведомления

Сообщения, отправляемые на topic `notification`, должны иметь следующий формат:

```json
{
	"type": "mail", // mail
	"sendTo": "example@mail.ru", // Куда отправлять
	"template": "reg_confirmation", // Имя шаблона
	"data": {} // Данные для шаблона
}
```

### Почтовые шаблоны (type/mail)

| Название         | Данные                                                        |
| ---------------- | ------------------------------------------------------------- |
| reg_confirmation | `confirmLink: string` - Ссылка подтверждения для пользователя |
| reset_password   | `resetLink: string` - Ссылка сброса пароля для пользователя   |
| tf_auth          | `code: string` - Код двухфакторной аутентификации             |

### Примеры

Запросить подтверждение адреса электронной почты, путем отправки письма с токеном

```json
{
	"type": "mail",
	"sendTo": "example@mail.ru",
	"template": "reg_confirmation",
	"data": {
		"confirmLink": "http://localhost:3001/auth/new-verification?token=CONFIRMATION_TOKEN"
	}
}
```
