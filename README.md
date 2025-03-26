# 📢 Уведомления

Сервис для отправки уведомлений установленного образца

## Формат сообщения

> [!NOTE]
> Сообщения, отправляемые в `notification`, должны соответствовать установленному JSON-формату.

```json
{
	"type": "mail",
	"sendTo": "example@mail.ru",
	"template": "reg_confirmation",
	"data": {}
}
```

| Поле       | Тип    | Описание                              |
| ---------- | ------ | ------------------------------------- |
| `type`     | string | Тип уведомления (например, `mail`).   |
| `sendTo`   | string | Адрес получателя уведомления.         |
| `template` | string | Имя почтового шаблона.                |
| `data`     | object | Данные, передаваемые в шаблон письма. |

---

## ✉️ Почтовые шаблоны (`type: "mail"`)

| Шаблон             | Данные                                                   |
| ------------------ | -------------------------------------------------------- |
| `reg_confirmation` | `confirmLink: string` – ссылка для подтверждения email.  |
| `reset_password`   | `resetLink: string` – ссылка для сброса пароля.          |
| `tf_auth`          | `code: string` – код двухфакторной аутентификации (2FA). |

---

## 🛠 Примеры использования

### Запрос подтверждения email

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

### Сброс пароля

```json
{
	"type": "mail",
	"sendTo": "example@mail.ru",
	"template": "reset_password",
	"data": {
		"resetLink": "http://localhost:3001/auth/reset-password?token=RESET_TOKEN"
	}
}
```

### Двухфакторная аутентификация (2FA)

```json
{
	"type": "mail",
	"sendTo": "example@mail.ru",
	"template": "tf_auth",
	"data": {
		"code": "123456"
	}
}
```

---

### 🚀 Быстрый старт

1. Подключите сервис к вашей системе.
2. Отправьте JSON-сообщение в `topic notification`.
3. Готово! Уведомления будут доставлены пользователям. 🎉
