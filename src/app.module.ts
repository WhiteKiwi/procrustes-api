import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

import { ConfigModule } from '@nestjs/config';
import Joi from '@hapi/joi';
import configuration, { DEFAULT_PORT } from './config';
import { ENVIRONMENT } from './utils/constants'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: '.env',
			load: [configuration],
			validationSchema: Joi.object({
				ENVIRONMENT: Joi.string()
					.valid(...Object.keys(ENVIRONMENT))
					.default(ENVIRONMENT.DEVELOPMENT),
				PORT: Joi.number().default(DEFAULT_PORT),
			}),
		}),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
