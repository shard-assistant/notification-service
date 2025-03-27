import { Injectable, Logger, OnModuleInit } from "@nestjs/common"

import { ConsumerService } from "./kafka/consumer.service"
import { MailService } from "./libs/mail/mail.service"
import { BrokerMessageData } from "./libs/mail/types/message.type"

const LOGGER = new Logger("ConsumerService")

@Injectable()
export class AppService implements OnModuleInit {
	constructor(
		private readonly consumerService: ConsumerService,
		private readonly mailService: MailService
	) {}

	async onModuleInit() {
		await this.consumerService.consume(
			{ topics: ["notification"] },
			{
				eachMessage: async ({ message }) => {
					try {
						const messageData = JSON.parse(
							message.value.toString()
						) as BrokerMessageData

						switch (messageData.type) {
							case "mail": {
								this.mailService.sendTemplate(
									messageData.sendTo,
									messageData.template,
									messageData.data
								)
							}
						}
					} catch (error) {
						LOGGER.error("Invalid message!", error)
					}
				}
			}
		)
	}
}
