import { Injectable, OnApplicationShutdown, OnModuleInit } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { Kafka, ProducerRecord } from "kafkajs"

@Injectable()
export class ProducerService implements OnModuleInit, OnApplicationShutdown {
	constructor(private readonly configService: ConfigService) {}

	private readonly kafka = new Kafka({
		brokers: this.configService.getOrThrow("KAFKA_BROKERS")?.split(",") || []
	})

	private readonly producer = this.kafka.producer()

	async onModuleInit() {
		await this.producer.connect()
	}

	async produce(record: ProducerRecord) {
		await this.producer.send(record)
	}

	async onApplicationShutdown() {
		await this.producer.disconnect()
	}
}
