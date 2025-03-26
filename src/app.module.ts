import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"

import { ConsumerService } from "@/kafka/consumer.service"
import { KafkaModule } from "@/kafka/kafka.module"
import { IS_DEV_ENV } from "@/libs/common/util/is-dev.util"
import { MailModule } from "@/libs/mail/mail.module"

import { AppService } from "./app.service"
import { MailService } from "./libs/mail/mail.service"

@Module({
	imports: [
		ConfigModule.forRoot({
			ignoreEnvFile: !IS_DEV_ENV,
			isGlobal: true
		}),
		KafkaModule,
		MailModule
	],
	providers: [AppService, ConsumerService, MailService]
})
export class AppModule {}
