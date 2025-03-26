import { MailerService } from "@nestjs-modules/mailer"
import { Injectable, Logger } from "@nestjs/common"
import { render } from "@react-email/components"

import { ConfirmationTemplate } from "./templates/confirmation.template"
import { Templates } from "./types/templates.type"

const LOGGER = new Logger("MailService")
const templates: Templates = {
	confirmation: {
		subject: "Подтверждение электронной почты",
		template: ConfirmationTemplate
	}
}

@Injectable()
export class MailService {
	public constructor(private readonly mailerService: MailerService) {}

	public async sendTemplate(email: string, templateId: string, data: any) {
		const templateData = templates[templateId]

		if (!templateData) {
			LOGGER.error(`Template with id "${templateId}" does not exists!`)
			return
		}

		const html = await render(templateData.template(data))
		console.log(html)

		LOGGER.log(`Template with id "${templateId}" sended to email "${email}".`)
		return this.sendMail(email, templates[templateId].subject, html)
	}

	private sendMail(email: string, subject: string, html: string) {
		this.mailerService.sendMail({
			to: email,
			subject,
			html
		})
	}
}
