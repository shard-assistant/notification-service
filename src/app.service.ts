import { Injectable, OnModuleInit } from "@nestjs/common"
import { partition } from "rxjs"

import { ConsumerService } from "./kafka/consumer.service"
import { ProducerService } from "./kafka/producer.service"

@Injectable()
export class AppService implements OnModuleInit {
	constructor(
		private readonly producerService: ProducerService,
		private readonly consumerService: ConsumerService
	) {}

	async onModuleInit() {
		await this.consumerService.consume(
			{ topics: ["notification-service"] },
			{
				eachMessage: async ({ topic, partition, message }) => {
					console.log({
						value: message.value.toString(),
						topic: topic.toString(),
						partition: partition.toString()
					})
				}
			}
		)
	}

	async sendTopic() {
		await this.producerService.produce({
			topic: "notification-service",
			messages: [
				{
					value: "Test message"
				}
			]
		})

		return "Sended"
	}
}
