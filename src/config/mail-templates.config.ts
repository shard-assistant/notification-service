import { ConfirmationTemplate } from "@/libs/mail/templates/confirmation.template"
import { TemplateConfig } from "@/libs/mail/types/templates.type"

export const mailTemplates: TemplateConfig = {
	confirmation: {
		subject: "Подтверждение электронной почты",
		template: ConfirmationTemplate
	}
}
