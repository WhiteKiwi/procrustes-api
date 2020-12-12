import Joi from '@hapi/joi';
import { DEFAULT_PORT } from './default'
import { ENVIRONMENT } from '../utils/constants'

export default Joi.object({
    PORT: Joi.number().default(DEFAULT_PORT),
    ENVIRONMENT: Joi.string()
        .valid(...Object.keys(ENVIRONMENT))
        .default(ENVIRONMENT.DEVELOPMENT),
})