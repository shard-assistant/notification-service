import { Injectable, OnApplicationShutdown } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import {
	Consumer,
	ConsumerRunConfig,
	ConsumerSubscribeTopics,
	Kafka
} from "kafkajs"

@Injectable()
export class ConsumerService implements OnApplicationShutdown {
	constructor(private readonly configService: ConfigService) {}

	private readonly kafka = new Kafka({
		brokers: this.configService.getOrThrow("KAFKA_BROKERS")?.split(",") || []
	})

	private readonly consumers: Consumer[] = []

	async consume(topic: ConsumerSubscribeTopics, config: ConsumerRunConfig) {
		const consumer = this.kafka.consumer({
			groupId: this.configService.getOrThrow("KAFKA_GROUP_ID")
		})
		await consumer.connect()
		await consumer.subscribe(topic)
		await consumer.run(config)
		this.consumers.push(consumer)
	}

	async onApplicationShutdown() {
		await Promise.all(this.consumers.map((consumer) => consumer.disconnect()))
	}
}
