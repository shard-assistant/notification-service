import { ConfigService } from "@nestjs/config"
import { NestFactory } from "@nestjs/core"

import { AppModule } from "./app.module"

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	const config = app.get(ConfigService)

	await app.listen(config.getOrThrow<number>("APPLICATION_PORT"))
}

bootstrap()
