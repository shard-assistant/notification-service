import { MailerService } from "@nestjs-modules/mailer"
import { Injectable, Logger } from "@nestjs/common"
import { render } from "@react-email/components"

import { mailTemplates } from "@/config/mail-templates.config"

const LOGGER = new Logger("MailService")

@Injectable()
export class MailService {
	public constructor(private readonly mailerService: MailerService) {}

	public async sendTemplate(email: string, templateId: string, data: any) {
		const templateData = mailTemplates[templateId]

		if (!templateData) {
			LOGGER.error(`Template with id "${templateId}" does not exists!`)
			return
		}

		try {
			const html = await render(templateData.template(data))

			LOGGER.log(`Template with id "${templateId}" sended to email "${email}".`)
			return this.sendMail(email, templateData.subject, html)
		} catch (error) {
			LOGGER.error(`Template data is invalid!`, error, templateData)
		}
	}

	private sendMail(email: string, subject: string, html: string) {
		this.mailerService.sendMail({
			to: email,
			subject,
			html
		})
	}
}
