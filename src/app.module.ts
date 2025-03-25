import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"

import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { ConsumerService } from "./kafka/consumer.service"
import { KafkaModule } from "./kafka/kafka.module"
import { ProducerService } from "./kafka/producer.service"
import { IS_DEV_ENV } from "./libs/common/util/is-dev.util"

@Module({
	imports: [
		ConfigModule.forRoot({
			ignoreEnvFile: !IS_DEV_ENV,
			isGlobal: true
		}),
		KafkaModule
	],
	providers: [AppService, ProducerService, ConsumerService],
	controllers: [AppController]
})
export class AppModule {}
