import { ConfirmationTemplate } from "@/libs/mail/templates/confirmation.template"
import { ResetPasswordTemplate } from "@/libs/mail/templates/reset-password.template"
import { TwoFactorAuthTemplate } from "@/libs/mail/templates/two-factor-auth.template"
import { TemplateConfig } from "@/libs/mail/types/templates.type"

export const mailTemplates: TemplateConfig = {
	reg_confirmation: {
		subject: "Подтверждение электронной почты",
		template: ConfirmationTemplate
	},
	reset_password: {
		subject: "Сброс пароля",
		template: ResetPasswordTemplate
	},
	tf_auth: {
		subject: "Двухфакторная аутентификация",
		template: TwoFactorAuthTemplate
	}
}
